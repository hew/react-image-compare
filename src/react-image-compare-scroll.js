import React, {Component} from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import { Easer } from 'functional-easing'
import { Track, TrackedDiv, TrackDocument } from '../lib/ReactTrack'
import { tween, combine } from 'react-imation'
import { percent } from 'react-imation/tween-value-factories'
import { topTop,
        centerCenter,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from 'react-track/tracking-formulas'

import '../css/style.css'

const easeOutBounce = new Easer().using('out-bounce')

export default class ImageCompareScroll extends Component {

  static defaultProps = {
    vertical: false
  }

  render() {

    const { srcUnder, srcOver, vertical } = this.props

    return (

      <TrackDocument
        formulas={[
          getDocumentElement,
          getDocumentRect,
          calculateScrollY,
          topTop,
          centerCenter
        ]}>

        {(documentElement, documentRect, scrollY, topTop, centerCenter) =>

          <TrackedDiv formulas={[topTop, centerCenter]}>
            {(posCenterCenter,posTopTop) =>

              <div className='comparison'>
                <figure>
                  <img src={ srcOver } alt="" />

                  {/*
                    The default is to render horizontally
                  */}

                  { !vertical &&
                    <div
                      style={tween(scrollY, [
                        [ posTopTop,       { width: percent(0), height: percent(100) }  ],
                        [ posCenterCenter, { width: percent(100), height: percent(100) } ]
                      ])}>
                      <div style={{ backgroundImage: `url(${srcUnder})` }}></div>
                    </div>
                  }

                  {/*
                    Otherwise, if the vertical property is set,
                    we render the vertical styles
                  */}

                  { vertical &&
                    <div
                      style={tween(scrollY, [
                        [ posTopTop,       { height: percent(0), width: percent(100) }  ],
                        [ posCenterCenter, { height: percent(100), width: percent(100) } ]
                      ])}>
                      <div style={{ backgroundImage: `url(${srcUnder})` }}></div>
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
