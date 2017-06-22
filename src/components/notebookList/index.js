import React, { Component } from 'react'

import Notebook from '../notebook/index'
import './index.css'

class NotebookList extends Component {

  render () {
    return (
      <div className="notebooks">
        <Notebook />
        <Notebook />
        <Notebook />
        <Notebook />
      </div>
    )
  }
}

export default NotebookList

