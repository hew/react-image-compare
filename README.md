# React Image Comparison

> Before/after image comparison components: <br>
> - Manual or
> - scroll-based


## Demo 

[http://hew.github.io/react-image-compare](http://hew.github.io/react-image-compare/)

## Usage

```
import { ImageCompare, ImageCompareScroll } from 'react-image-compare'

const img1    = 'img/before.jpg'
const img2    = 'img/after.jpg'

compareStylesScroll = {{ borderRight: `3px dotted yellow` }}
compareStylesManual = {{ borderBottom: `3px dotted yellow` }}

// render

  <ImageCompareScroll
    srcOver={img1}
    srcUnder={img2}
    vertical={false}
    styles={compareStylesScroll}
  />

// ...

  <ImageCompare
    srcOver={img1}
    srcUnder={img2}
    vertical={true}
    styles={compareStylesManual}
  />

```

## Low-level, Responsive

These components were written with flexibility in mind, and are completely responsive.
You can wrap them in any styles you need, and pass through an object to style the animating div.

## Roadmap

- [] Split up the library/documentation dependencies

## Inspired By

The [Twenty Twenty](http://zurb.com/playground/twentytwenty) jQuery plugin.

## Powered By

- [React Track](https://github.com/gilbox/react-track)
- [React Imation](https://github.com/gilbox/react-imation)
