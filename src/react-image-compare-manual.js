import React, { Component, PropTypes } from 'react'
import '../css/style.css'

export default class ImageCompare extends Component {
  constructor(props) {
    super(props)

    this.state = { percentage: 1 }

    this._slide = this._slide.bind(this)
  }

  static propTypes = {
    srcUnder: React.PropTypes.string.isRequired,
    srcOver: React.PropTypes.string.isRequired,
    vertical: React.PropTypes.bool,
    percentage: React.PropTypes.number,
    controls: React.PropTypes.bool,
    styles: React.PropTypes.object
  }

  render() {

    const { srcOver, srcUnder, vertical, percentage, controls, styles } = this.props

    return (

       <div className='comparison'>
         <figure>
           <img src={ srcOver } alt="" />
           {/* The default is to render horizontally */}
           { !vertical &&
             <div style={{
               width: `${ percentage || this.state.percentage}%`,
               backgroundImage: `url(${srcUnder})`,
               ...styles
             }} />
           }
           {/* Otherwise, if the vertical property is set, render vertically */}
           { vertical &&
             <div style={{
               height: `${ percentage || this.state.percentage }%`,
               backgroundImage: `url(${srcUnder})`,
               ...styles
             }} />
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
