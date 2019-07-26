# react-aspect-ratio-img
[![Build Status](https://travis-ci.org/danhuang1202/react-aspect-ratio-img.svg?branch=master)](https://travis-ci.org/danhuang1202/react-aspect-ratio-img) 
[![codecov](https://codecov.io/gh/danhuang1202/react-aspect-ratio-img/branch/master/graph/badge.svg)](https://codecov.io/gh/danhuang1202/react-aspect-ratio-img)
[![NPM version](https://img.shields.io/npm/v/react-aspect-ratio-img.svg)](https://www.npmjs.com/package/react-aspect-ratio-img)

for more information, please see: <a href="https://danhuang1202.github.io/react-aspect-ratio-img/">Document</a>


## Installation
```
npm i react-aspect-ratio-img
```

## Components
- AspectRatioImg

  aspect ratio placeholder with `<img>`, `no IE support`

- AspectRatioImgLegacy

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
```
```
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
```
```
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