# geojson-to-svg-cli

[![Greenkeeper badge](https://badges.greenkeeper.io/derhuerst/geojson-to-svg-cli.svg)](https://greenkeeper.io/)

**Command line tool to convert GeoJSON to SVG.**

[![npm version](https://img.shields.io/npm/v/geojson-to-svg-cli.svg)](https://www.npmjs.com/package/geojson-to-svg-cli)
[![build status](https://img.shields.io/travis/derhuerst/geojson-to-svg-cli.svg)](https://travis-ci.org/derhuerst/geojson-to-svg-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/geojson-to-svg-cli.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install derhuerst/geojson-to-svg-cli
```


## Usage

```
Usage:
    geojson-to-svg [-p mercator]
Options:
    --projection  -p  Which projection to use. Default: mercator
                      Refer to npmjs.com/projections for a list.
Examples:
    cat example.geo.json | geojson-to-svg -p lambert > example.svg
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/geojson-to-svg-cli/issues).
