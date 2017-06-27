import React, { Component } from 'react'

import classNames from 'classnames'
import './index.css'

class Notebook extends Component {
  constructor (props) {
    super()

    this.activateBook = this.activateBook.bind(this)

  }

  activateBook () {
    const activateNotebook = this.props.activateNotebook
    activateNotebook(this.props.book.id)

  }

  render () {
    const {book, createBookComplete} = this.props
    const {type, title, totalNum, status, active,} = book

    const cls = classNames({
      notebook: true,
      ['notebook-active']: active,
    })

    return (
      <div className={cls} onClick={this.activateBook}
           onDoubleClick={this.activateBook}>
        <div className="notebook-icon"/>

        {
          status === 'done' &&
          <div>
            <div className="notebook-title">{title}</div>
            <div className="notebook-totalNum">{totalNum}</div>
          </div>
        }

        {
          status === 'create' &&
          <div className="notebook-create">
            <input type="text" className="notebook-create-input" autoFocus
                   onBlur={createBookComplete} onKeyDown={createBookComplete}/>
          </div>
        }


      </div>
    )
  }
}

export default Notebook
