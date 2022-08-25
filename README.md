# Concatenate (NodeJS)

[`Concatenate.NodeJS`](https://github.com/hugoalh-studio/concatenate-nodejs)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/concatenate-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/concatenate-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/concatenate-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/concatenate-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/concatenate-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/concatenate-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/concatenate-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/concatenate-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/concatenate-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/concatenate-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/concatenate-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/concatenate-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/concatenate-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/concatenate-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/concatenate-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/concatenate-nodejs?label=%20&style=flat-square)) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/concatenate-nodejs?label=%20&style=flat-square)) |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/concatenate-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/concatenate-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/concatenate-nodejs?sort=semver&label=%20&style=flat-square) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/concatenate-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/concatenate) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/concatenate?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/concatenate/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/concatenate/pre?label=%20&style=flat-square) |

## 📝 Description

A NodeJS module to concatenate multiple items into one item.

*This project is separated from `@hugoalh/more-method`'s ([GitHub](https://github.com/hugoalh-studio/more-method-nodejs))([NPM](https://www.npmjs.com/package/@hugoalh/more-method)) function `concatenate`.*

## 📚 Documentation

### Getting Started

#### Install

- NodeJS >= v10.13.0
- NPM >= v6.4.1

```sh
npm install @hugoalh/concatenate
```

#### Use In CommonJS

```js
const concatenate = require("@hugoalh/concatenate");
```

#### Use In ModuleJS

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
