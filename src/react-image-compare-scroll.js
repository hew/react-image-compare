import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import { Easer } from 'functional-easing'
import { Track, TrackedDiv, TrackDocument } from 'react-track'
import { tween, combine } from 'react-imation'
import { percent } from 'react-imation/tween-value-factories'
import { centerTop,
        bottomBottom,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY } from 'react-track/tracking-formulas'
import '../css/style.css'

const easeOutBounce = new Easer().using('out-bounce')

export default class ImageCompareScroll extends Component {

  static propTypes = {
    srcUnder: React.PropTypes.string.isRequired,
    srcOver: React.PropTypes.string.isRequired,
    vertical: React.PropTypes.bool,
    styles: React.PropTypes.object,
  }

  static defaultProps = { vertical: false }

  render() {

    const { srcUnder, srcOver, vertical, styles } = this.props

    return (

      <TrackDocument
        formulas={[
          getDocumentElement,
          getDocumentRect,
          calculateScrollY,
          bottomBottom,
          centerTop
        ]}>

        {(documentElement, documentRect, scrollY, bottomBottom, centerTop) =>

          <TrackedDiv formulas={[bottomBottom, centerTop]}>
            {(posBottomBottom, posCenterTop) =>

              <div className='comparison'>
                <figure>
                  <img src={ srcOver } alt="" />
                  {/* The default is to render horizontally */}
                  { !vertical &&
                    <div
                      style={tween(scrollY, [
                        [ 0,                    { width: percent(0), height: percent(100) } ],
                        [ posBottomBottom,      { width: percent(0), height: percent(100) } ],
                        [ posCenterTop,         { width: percent(100), height: percent(100) } ]
                      ])}>
                      <div
                        style={{
                          backgroundImage: `url(${srcUnder})`,
                          ...styles
                        }} />
                    </div>
                  }
                  {/* Otherwise, if the vertical property is set, render vertically */}
                  { vertical &&
                    <div
                      style={tween(scrollY, [
                        [ 0,                    { height: percent(0), width: percent(100) } ],
                        [ posBottomBottom,      { height: percent(0), width: percent(100) }  ],
                        [ posCenterTop,         { height: percent(100), width: percent(100) } ]
                      ])}>
                      <div style={{
                        backgroundImage: `url(${srcUnder})`,
                        ...styles
                      }} />
                    </div>
                  }
                  </figure>
              </div>
            }
          </TrackedDiv>

        }</TrackDocument>
      )
   }
}
