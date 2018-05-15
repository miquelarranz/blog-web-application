# Blog Web Application

This is the web application used in www.webecosystem.io for some of the articles.

## Installation

The app is using [yarn](https://yarnpkg.com/en/) to install all the packages required, but you can use [npm](https://www.npmjs.com/) as well. Thus, in order to install the app locally, you need to run the following commands:

```
git clone https://github.com/miquelarranz/blog-web-application.git
cd blog-web-application
yarn install
```

## Usage

Since the project is written using [ES6 (EcmaScript 6)](http://es6-features.org/) we need a compiler to make it compatible with all the browsers. We will use [Babel](https://babeljs.io/) with [Webpack](https://webpack.js.org/concepts/) to make it work. In order to run the project you need to run this command:

```
yarn run webpack
```
or
```
yarn run webpack --watch
```
if you want Webpack to compile the files when you do a change on a file automatically.

## License

Blog Web Application is distributed under the MIT license.
