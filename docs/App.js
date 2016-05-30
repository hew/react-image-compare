import React, { Component } from 'react'
import './css/index.css'

import { ImageCompare , ImageCompareScroll } from '../dist/'

const img1 = 'docs/img/before.jpg'
const img2 = 'docs/img/after.jpg'

export default class App extends Component {

  render () {

    return (
      <main>
        <div className="center w50 mx-auto mb">
          <h1 className='dots'>React Picture Comparison Component(s)</h1>
          <h3>
            Feed &lt;ImageCompare&gt; and/or &lt;ImageCompareScroll&gt; some pictures for a 'before/after' type of effect.
          </h3>
          <div className="flex justify-center">
            <iframe src="https://ghbtns.com/github-btn.html?user=hew&repo=react-image-compare&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
          </div>
        </div>
        <div className="hr"></div>
        <h1 className='center'>Manual</h1>
        <div style={{ height: `auto`, width: `600px`, margin: `0 auto`}}>

          <ImageCompare
            srcOver={img1}
            srcUnder={img2}
            controls={true}
            vertical={true}
            styles={{ borderBottom: `3px dotted yellow`}}
          />

        </div>
        <div className="hr"></div>
        <h1 className='center'>Scroll-based</h1>
        <h3 className='center'>(scroll down)</h3>
        <div style={{ height: `auto`, width: `600px`, paddingTop: `55em`, paddingBottom: `55em`, margin: `0 auto`}}>

          <ImageCompareScroll
            srcOver={img1}
            srcUnder={img2}
            vertical={false}
            styles={{ borderRight: `3px dotted yellow`}}
          />

        </div>
        <footer>
          <p>Made by <a href="http://github.com/hew">hew</a></p>
        </footer>
      </main>
    )
  }
}
