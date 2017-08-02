#!/usr/bin/env node
'use strict'

const mri = require('mri')
const svgify = require('geojson-svgify')
const projections = require('projections')
const bbox = require('@turf/bbox')
const h = require('virtual-hyperscript-svg')
const toString = require('virtual-dom-stringify')

const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: ['help', 'h', 'version', 'v']
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    geojson-to-svg [-p mercator]
Options:
    --projection  -p  Which projection to use. Default: mercator
                      Refer to npmjs.com/projections for a list.
Examples:
    cat example.geo.json | geojson-to-svg -p lambert > example.svg
\n`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`geojson-to-svg v${pkg.version}\n`)
	process.exit(0)
}

const showError = (err) => {
	console.error(err)
	process.exit(1)
}

const projection = argv.projection || argv.p || 'mercator'
if (!(projection in projections)) {
	showError('Unknown projection. These are supported:\n' + Object.keys(projections).join(', '))
}
const project = ([lon, lat]) => {
	const {x, y} = projections[projection]({lat, lon}) // todo
	return [x, y]
}

// todo
const styles = h('style', {}, `
	.shape {
		stroke: none;
		fill: black;
	}
`)

let input = ''
process.stdin
.on('error', showError)
.on('data', (d) => {
	input += d.toString('utf8')
})
.once('end', () => {
	try {
		const geojson = JSON.parse(input)
		const [west, south, east, north] = bbox(geojson)

		const polylines = svgify(geojson, {projection: project})

		const [left, top] = project([west, north])
		const [right, bottom] = project([east, south])
		const width = right - left
		const height = bottom - top

		const svg = h('svg', {
		    width: (Math.abs(width) * 100000) + '',
		    height: (Math.abs(height) * 100000) + '',
		    viewBox: [left, top, width, height].join(',')
		}, [styles, polylines])

		process.stdout.write(toString(svg))
	} catch (err) {
		return showError(err)
	}
})
