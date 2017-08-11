import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import { Easer } from 'functional-easing'
import { Track, TrackedDiv, TrackDocument } from 'react-track'
import { tween, combine } from 'react-imation'
import { percent } from 'react-imation/tween-value-factories'
import { topTop,
        bottomBottom,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from 'react-track/tracking-formulas'
import '../css/style.css'

const easeOutBounce = new Easer().using('out-bounce')


export default class ImageCompareScroll extends Component {

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
          topTop
        ]}>

        {(documentElement, documentRect, scrollY, bottomBottom, topTop) =>

          <TrackedDiv formulas={[bottomBottom, topTop]}>
            {(posBottomBottom, posTopTop) =>

              <div className='comparison'>
                <figure>
                  <img src={ srcOver } alt="" />
                  {/* The default is to render horizontally */}
                  { !vertical &&
                    <div
                      style={tween(scrollY, [
                        [ 0,                    { width: percent(0), height: percent(100) } ],
                        [ posBottomBottom,      { width: percent(0), height: percent(100) } ],
                        [ posTopTop,            { width: percent(100), height: percent(100) } ]
                      ])}>
                      <div style={{ backgroundImage: `url(${srcUnder})`, ...styles }}></div>
                    </div>
                  }
                  {/* Otherwise, if the vertical property is set, render vertically */}
                  { vertical &&
                    <div
                      style={tween(scrollY, [
                        [ 0,                    { height: percent(0), width: percent(100) } ],
                        [ posBottomBottom,      { height: percent(0), width: percent(100) }  ],
                        [ posTopTop,            { height: percent(100), width: percent(100) } ]
                      ])}>
                      <div style={{ backgroundImage: `url(${srcUnder})`, ...styles }}></div>
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
