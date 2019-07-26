# react-aspect-ratio-img
### [![Build Status](https://travis-ci.org/danhuang1202/react-aspect-ratio-img.svg?branch=master)](https://travis-ci.org/danhuang1202/react-aspect-ratio-img) [![codecov](https://codecov.io/gh/danhuang1202/react-aspect-ratio-img/branch/master/graph/badge.svg)](https://codecov.io/gh/danhuang1202/react-aspect-ratio-img) [![js-standard-style][standard-image]][standard-url] [![code style: prettier][prettier-image]][prettier-url]
[status-image]: https://screwdriver.ouroath.com/pipelines/1011642/badge
[status-url]: https://screwdriver.ouroath.com/pipelines/1011642
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier

for more information, please see: <a href="https://danhuang1202.github.io/react-aspect-ratio-img/">Document</a>


## Installation
```
npm i react-aspect-ratio-img
```

## Components
- AspectRatioImg

  aspect ratio placeholder with `<img>`

- SquareImg

  square placeholder with `<img>`

## Way to Ride
- Common jS
```
// import from package entry point
const uc = require('react-aspect-ratio-img')
require('react-aspect-ratio-img/css/style.css')

  <uc.AspectRatioImg {...props} />
  <uc.SquareImg {...props} />

// only import specific component
const AspectRatioImg = require('react-aspect-ratio-img/lib/components/AspectRatioImg')
require('react-aspect-ratio-img/css/components/AspectRatioImg/style.css')

  <AspectRatioImg {...props} />
```

- ESM
```
// import from package entry point
import { AspectRatioImg, SquareImg } from 'react-aspect-ratio-img'
import 'react-aspect-ratio-img/css/style.css'

  <AspectRatioImg {...props} />
  <SquareImg {...props} />

// only import specific component
import AspectRatioImg from 'react-aspect-ratio-img/es/components/AspectRatioImg'
import 'react-aspect-ratio-img/css/components/AspectRatio/style.css'

  <AspectRatioImg {...props} />
```

## Development by storybook
```
npm install
npm start storybook
```
- configuration files list in `.storybook` directory
- story files list in `.stories` directory


## Test with Jest and Puppeteer
```
npm run test
```
- `__tests__`
  - unit test running by `jest`
  - use `test:update` to update jest `snapshot`