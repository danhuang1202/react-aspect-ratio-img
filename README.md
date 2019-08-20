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
- AspectRatioImg (`no IE support`)

  Use [AspectRatioFence](https://www.npmjs.com/package/react-aspect-ratio-fence) as wrap element to set the aspect ratio and pass `<img />` element as `children` props into it.

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | outerElementType | string | false | div | html tag name of the wrap component |
  | ratio	| number | true |	1	| The aspect ratio of an image describes the proportional relationship between width and height |
  | className	| string |	false | - | Custom class name of the wrap component |
  | src	| string |	true | - | The URL of an image |
  | imgAttributes | object | false | - | The [attributes](https://www.w3schools.com/tags/tag_img.asp) of `<img />` tag |
  | children | ReactNode | false | - | Custom children node which as silbing of `<img />` tag |

- AspectRatioImgLegacy

  Use [AspectRatioFenceLegacy](https://www.npmjs.com/package/react-aspect-ratio-fence) as wrap element to set the aspect ratio and pass `<img />` element as `children` props into it.

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | outerElementType | string | false | div | html tag name of the outer component |
  | innerElementType | string | false | div | html tag name of the inner component |
  | ratio	| number | true |	1	| The aspect ratio of an image describes the proportional relationship between width and height |
  | className	| string |	false | - | Custom class name of the wrap component |
  | src	| string |	true | - | The URL of an image |
  | imgAttributes | object | false | - | The [attributes](https://www.w3schools.com/tags/tag_img.asp) of `<img />` tag |
  | children | ReactNode | false | - | Custom children node which as silbing of `<img />` tag |

- SquareImg

  Use [SquareFence](https://www.npmjs.com/package/react-aspect-ratio-fence) as wrap element and pass `<img />` element as `children` props into it.

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | outerElementType | string | false | div | html tag name of the wrap component |
  | className	| boolean |	false | - | Custom class name of the wrap component |
  | src	| string |	true | - | The URL of an image |
  | imgAttributes | object | false | - | The [attributes](https://www.w3schools.com/tags/tag_img.asp) of `<img />` tag |
  | children | ReactNode | false | - | Custom children node which as silbing of `<img />` tag |

## Way to Ride
- Common jS
```js
// import from package entry point
const uc = require('react-aspect-ratio-img')
require('react-aspect-ratio-img/css/style.css')

  <uc.AspectRatioImg {...props} />
  <uc.SquareImg {...props} />
```
```js
// only import specific component
const AspectRatioImg = require('react-aspect-ratio-img/lib/components/AspectRatioImg')
require('react-aspect-ratio-img/css/components/AspectRatioImg/style.css')

  <AspectRatioImg {...props} />
```

- ESM
```js
// import from package entry point
import { AspectRatioImg, SquareImg } from 'react-aspect-ratio-img'
import 'react-aspect-ratio-img/css/style.css'

  <AspectRatioImg {...props} />
  <SquareImg {...props} />
```
```js
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