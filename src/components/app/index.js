import React, { Component } from 'react'

import NotebookList from '../notebookList/index'
import Notelist from '../noteList/index'
import Note from '../noteEditor/index'
import Btn from '../../base/btn/index'

import './index.css'


class App extends Component {
  constructor (props) {
    super()

    this.createBook = this.createBook.bind(this)

    this.state = {
      bookList: [
        {type: 'notebook', title: '全部便签', totalNum: '0', status: 'done', active: true}

        ],
    }
  }

  // newBook: {type, title, totalNum, status}
  createBook() {
    const newBook = {
      type: 'notebook',
      title: 'new book',
      totalNum: '0',
      status: 'new'
    }
    this.setState((prev) => {
      return {
        bookList: prev.boolList.push(newBook)
      }
    })
  }

  render () {
    const {createBook, } = this
    const {bookList, } = this.state
    console.log('app booklist', bookList)
    return (
        <div className="App">

          {/* header */}
          <div className="header">
            <div className="header-titleBar">
              <div className="header-icon" />
              <div className="header-title">
                Qing Notes
              </div>
              <Btn styles={"f-r"}>
                <div className="btn-newNote" />
              </Btn>
              <Btn styles={"f-r"}>
                <div className="btn-newBook" onClick={createBook} />
              </Btn>
            </div>
            <div className="header-toolBar">
              <Btn styles={"f-l"}>
                <div className="btn-img" />
              </Btn>
              <Btn styles={"f-l"}>
                <div className="btn-move" />
              </Btn>
              <Btn styles={"f-r"}>
                <div className="btn-share" />
              </Btn>
              <Btn styles={"f-r"}>
                <div className="btn-delete" />
              </Btn>
            </div>
          </div>

          {/* body */}
          <div className="body">
            <NotebookList list={bookList}/>
            <Notelist/>
            <Note/>
          </div>
        </div>
    )
  }
}

export default App
