# React Image Comparison

> Before/after image comparison components: <br>
> - Manual or
> - scroll-based

## Install

```
$ npm i --save react-image-compare
```

## Demo

[http://hew.github.io/react-image-compare](http://hew.tools/react-image-compare)

## Usage

```
import { ImageCompare, ImageCompareScroll } from 'react-image-compare'

const img1    = 'img/before.jpg'
const img2    = 'img/after.jpg'

compareStylesScroll = {{ borderRight: `3px dotted yellow` }}
compareStylesManual = {{ borderBottom: `3px dotted yellow` }}

// render

  <ImageCompare
    srcOver={img1}
    srcUnder={img2}
    vertical={true}
    styles={compareStylesManual}
  />

// ...

  <ImageCompareScroll
    srcOver={img1}
    srcUnder={img2}
    vertical={false}
    styles={compareStylesScroll}
  />

```

## Low-level, Responsive

These components were written with flexibility in mind, and are completely responsive.
You can wrap them in any styles you need, and pass through an object to style the animating div.

## Scroll Timings

The scroll component is hard-coded to start when the element is fully visible, and within the
bottom part of the window, and finish when at the top of the window. Most of the time this is what you want.
If that is not what you want, it's pretty easy to alter the formulas (from [React Imation](http://github.com/gilbox/react-imation)).


## Inspired By

The [Twenty Twenty](http://zurb.com/playground/twentytwenty) jQuery plugin.

## Powered By

- [React Track](https://github.com/gilbox/react-track)
- [React Imation](https://github.com/gilbox/react-imation)
