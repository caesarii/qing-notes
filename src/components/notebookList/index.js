import React, { Component } from 'react'

import Notebook from '../notebook/index'
import SearchBox from '../../base/searchBox/index'
import './index.css'

class NotebookList extends Component {
  constructor (props) {
    super()


  }

  render () {
    const {list, completeBookCreation, activateNotebook} = this.props
    return (
      <div className="notebooks">
        <SearchBox />
        {/* 默认应该有全部标签 回收站 */}
        {
          list.map((book, index) => {
            return (<Notebook book={book} completeBookCreation={completeBookCreation} key={index} activateNotebook={activateNotebook} />)
          })
        }

      </div>
    )
  }
}

export default NotebookList

