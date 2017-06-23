import React, { Component } from 'react'

import classNames from 'classnames'
import './index.css'

class Notebook extends Component {
  constructor (props) {
    super()

    /*this.state = {
      // recycle-bin, all-notes
      type: 'notebook',
      title: '全部便签',
      totalNum: '3',
    }*/
  }

  render () {
    // const {type, title, totalNum} = this.state
    const {type, title, totalNum, status, active, } = this.props
    console.log('notebook', this.props)
    const cls = classNames({
      notebook: true,
      ['notebook-active']: active
    })

    return (
      <div className={cls}>
        <div className="notebook-icon" />
        <div className="notebook-title">{title}</div>
        <div className="notebook-totalNum">{totalNum}</div>
      </div>
    )
  }
}

export default Notebook
