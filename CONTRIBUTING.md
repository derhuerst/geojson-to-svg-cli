# Contributing to GeoJson To SVG CLI

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

### Table of Contents
* [Code of Conduct](#code-of-conduct)
* [I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
* [How can I contribute?](#how-can-I-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
  
  ---
  
## Code of Conduct

This project and everyone participating in it is governed by the [GeoJson To SVG CLI Code of Conduct](/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [mail@jannisr.de](mailto:mail@jannisr.de).

## I don't want to read this whole thing I just have a question!!!

If you have a question, then you may ask it through the [issue tracker](https://github.com/derhuerst/geojson-to-svg-cli/issues).


## How can I contribute?
### Reporting Bugs

This section guides you through submitting a bug report for GeoJson To SVG CLI. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](/.github/ISSUE_TEMPLATE), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report
* Ensure that the bug isn't caused due to misconfiguring your Hugo site.
* Check if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information by filling in [the template](/.github/ISSUE_TEMPLATE).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. **Don't just say what you did, but explain how you did it**.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Can you reproduce the problem in [`exampleSite`](/exampleSite)?**
* **Did the problem start happening recently** (e.g. after pulling GeoJson To SVG CLI' latest commits) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older release of GeoJson To SVG CLI, and/or Hugo?** What's the most recent version in which the problem doesn't happen? You can download older versions of GeoJson To SVG CLI from [the releases page](https://github.com/derhuerst/geojson-to-svg-cli/release).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for GeoJson To SVG CLI, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](.github/ISSUE_TEMPLATE), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* You might discover that the enhancement is already available. Most importantly, check if your clone is even with GeoJson To SVG CLI's master branch.
* Check if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on GeoJson To SVG CLI, and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of GeoJson To SVG CLI which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most users.
* **Specify which version of GeoJson To SVG CLI you're using.** You can get the exact version by running `hugo version` in your terminal.

### Your First Code Contribution

Unsure where to begin contributing to GeoJson To SVG CLI? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Local development

For working on GeoJson To SVG CLI, you can simply clone [this repository](https://github.com/derhuerst/geojson-to-svg-cli), and make changes to its source code. To ensure if your changes work, test them against the [`example site`](/exampleSite).

### Pull Requests

* Fill in [the required template](PULL_REQUEST_TEMPLATE.md)
* Do not include issue numbers in the PR title.
* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the [styleguides](#styleguides).
* Document new code based on the [Documentation Styleguide](#documentation-styleguide).
* End all files with a newline.
