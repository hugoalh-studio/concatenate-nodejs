# Concatenate (NodeJS)

[`Concatenate.NodeJS`](https://github.com/hugoalh-studio/concatenate-nodejs)

![NodeJS](https://img.shields.io/badge/NodeJS-339933?logo=nodedotjs&logoColor=ffffff&style=flat-square "NodeJS")
![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square "License")
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/concatenate-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/concatenate-nodejs/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/concatenate-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square "GitHub Contributors")](https://github.com/hugoalh-studio/concatenate-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/concatenate-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square "GitHub Issues")](https://github.com/hugoalh-studio/concatenate-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/concatenate-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square "GitHub Pull Requests")](https://github.com/hugoalh-studio/concatenate-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/concatenate-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square "GitHub Discussions")](https://github.com/hugoalh-studio/concatenate-nodejs/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/concatenate-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/concatenate-nodejs)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/concatenate-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/concatenate-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/concatenate-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/concatenate-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/concatenate-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/concatenate-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/concatenate) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/concatenate?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/concatenate/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/concatenate/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

## 📝 Description

A NodeJS module to concatenate multiple items into one item.

*This project is separated from `@hugoalh/more-method`'s ([GitHub](https://github.com/hugoalh-studio/more-method-nodejs))([NPM](https://www.npmjs.com/package/@hugoalh/more-method)) function `concatenate`.*

## 📚 Documentation

### Getting Started

#### Install

- NodeJS >= v10.13.0

```sh
npm install @hugoalh/concatenate
```

#### Use

##### CommonJS

```js
const concatenate = require("@hugoalh/concatenate");
```

##### ModuleJS

```js
import concatenate from "@hugoalh/concatenate";
```

### API

#### Function

```ts
concatenate(...items: any[][]): any[]
concatenate(...items: object[]): object
concatenate(...items: Map[]): Map
concatenate(...items: Set[]): Set
concatenate(...items: string[]): string
```

### Example

```js
concatenate(["one", "two", "three"], ["four", "five", "six"]);
//=> ["one", "two", "three", "four", "five", "six"]

concatenate({ foo: "bar" }, { loo: "too" });
//=> { foo: "bar", loo: "too" }

concatenate({ foo: { bar: { baz: 1 }}}, { foo: { bar: { boo: 2 }}});
//=> { foo: { bar: { baz: 1, boo: 2 }}}
```
