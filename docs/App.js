import React  from 'react'
import './css/index.css'

import ImageCompareScroll from '../dist/react-image-compare-scroll'
import ImageCompare from '../dist/react-image-compare-manual'

const img1 = 'http://placehold.it/600x300'
const img2 = 'http://placekitten.com/600/300'

export default class App extends React.Component {

  render () {
    return (
      <main>

        <div className="center w50 mx-auto mb">
          <h1 className='dots'>React Picture Comparison Component(s)</h1>
          <h3>
            Test
          </h3>
          <div className="flex justify-center">
            <iframe src="https://ghbtns.com/github-btn.html?user=hew&repo=react-image-compare&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
          </div>
        </div>
        <div className="hr"></div>
        <h1 className='center'>Horizontal</h1>
        <h5 className='center'>(scroll down)</h5>
        <div style={{ height: `50em`, width: `600px`, paddingTop: `25em`, margin: `0 auto`}}>

          <ImageCompareScroll
            srcOver={img1}
            srcUnder={img2}
            vertical={false}
          />

        </div>
        <div className="hr"></div>
        <h1 className='center'>Manual</h1>
        <div style={{ height: `22.7em`, width: `600px`, margin: `0 auto`}}>

          <ImageCompare
            srcOver={img1}
            srcUnder={img2}
            controls={true}
          />

        </div>
        <footer>
          <p>Made by <a href="http://github.com/hew">hew</a></p>
        </footer>
      </main>
    )
  }
}
