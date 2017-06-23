import React, { Component } from 'react'
import './index.css'

class SearchBox extends Component {
  constructor (props) {
    super()
    this.togglePlaceholder = this.togglePlaceholder.bind(this)
    this.state = {
      placeholder: '搜索全局便签',
    }
  }

  togglePlaceholder (e) {
    const type = e.type
    if(type === 'focus') {
      this.setState({
        placeholder: ''
      })
    } else {
      this.setState({
        placeholder: '搜索全局便签'
      })
    }

  }

  render () {
    const {placeholder, } = this.state
    return (
      <div className="search-box">
        <div className="search-bar">
          <div className="search-icon"></div>
          <div className="search-text">
            <div className="search-text-placeholder">
              {placeholder}
            </div>
            <input type="text" className="search-text-input"
                   onFocus={this.togglePlaceholder} onBlur={this.togglePlaceholder}/>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox