import React, { Component } from 'react'

import Notebook from '../notebook/index'
import SearchBox from '../../base/searchBox/index'
import './index.css'

class NotebookList extends Component {
  constructor (props) {
    super()


  }

  render () {
    console.log(this.props)
    const {list, createBookComplete} = this.props
    console.log('booklist list', list)
    return (
      <div className="notebooks">
        <SearchBox />
        {/* 默认应该有全部标签 回收站 */}
        {
          list.map((book, index) => {
            return (<Notebook book={book} createBookComplete={createBookComplete} key={index}/>)
          })
        }

      </div>
    )
  }
}

export default NotebookList

