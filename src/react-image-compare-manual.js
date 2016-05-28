import React, { Component, PropTypes } from 'react';
import '../css/style.css'


export default class ImageCompare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: 5
    }
    this._slide = this._slide.bind(this)
  }

  render() {

    const { vertical, percentage, srcOver, srcUnder, controls } = this.props

    return (

       <div className='comparison'>
         <figure>
           <img src={ srcOver } alt="" />
           { !vertical &&
             <div style={{ width: `${ percentage || this.state.percentage}%`, backgroundImage: `url(${srcUnder})`}} ></div>
           }
           { vertical &&
             <div style={{ height: `${ percentage || this.state.percentage }%`, backgroundImage: `url(${srcUnder})`}} ></div>
           }
         </figure>
         { controls &&
           <div className="compare-controls">
             <input type="range" min="0" max="100" value={this.state.percentage} ref={(c) => this._input = c} onChange={this._slide}/>
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
