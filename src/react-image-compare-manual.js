import React, { Component, PropTypes } from 'react'
import '../css/style.css'


export default class ImageCompare extends Component {
  constructor(props) {
    super(props)

    this.state = { percentage: props.percentage || 1 }

    this._slide = this._slide.bind(this)
  }

  render() {

    const { vertical, srcOver, srcUnder, controls, styles } = this.props

    return (

       <div className='comparison'>
         <figure>
           <img src={ srcOver } alt="" />
           {/* The default is to render horizontally */}
           { !vertical &&
             <div style={{
                 width: `${this.state.percentage}%`,
                 backgroundImage: `url(${srcUnder})`,
                 ...styles
               }}></div>
           }
           {/* Otherwise, if the vertical property is set, render vertically */}
           { vertical &&
             <div style={{
                 height: `${this.state.percentage}%`,
                 backgroundImage: `url(${srcUnder})`,
                 ...styles
               }}></div>
           }
         </figure>
         { controls &&
           <div className="compare-controls">
             <input
               type="range"
               min="0"
               max="100"
               value={this.state.percentage}
               ref={(c) => this._input = c}
               onChange={this._slide}
               />
           </div>
         }
       </div>

      )
  }

  _slide() {
    this.setState({
      percentage: this._input.value
    })
  }

}
