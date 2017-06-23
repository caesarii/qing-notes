import React, { Component } from 'react'

import NotebookList from '../notebookList/index'
import Notelist from '../noteList/index'
import Note from '../noteEditor/index'
import Btn from '../../base/btn/index'

import './logo.svg'
import './index.css'


class App extends Component {
  constructor (props) {
    super()

    this.createBook = this.createBook.bind(this)
    this.createBookComplete = this.createBookComplete.bind(this)
    this.state = {
      bookList: [
        {type: 'notebook', title: '全部便签', totalNum: '0', status: 'done', active: true}
        ]
    }
  }

  // newBook: {type, title, totalNum, status}
  createBook() {
    const newBook = {
      type: 'notebook',
      title: 'new folder',
      totalNum: '0',
      status: 'create'
    }
    this.setState((prev) => {
      prev.bookList.push(newBook)
      return {
        bookList: prev.bookList
      }
    })

    console.log('create book', this.state)
  }

  createBookComplete(e) {
    const type = e.type;
    const keyCode = e.keyCode
    const val = e.target.value
    if(type === 'blur' || type === 'keydown' && keyCode === 13) {
      console.log('complete')
      this.setState((prev) => {
        const prevbooklist = prev.bookList
        prevbooklist[prevbooklist.length - 1].title = val;
        prevbooklist[prevbooklist.length - 1].status = 'done'
        return {
          bookList: prevbooklist
        }
      })
    }

    }

  render () {
    const {createBook, createBookComplete} = this
    const {bookList} = this.state
    console.log('app booklist', this.state)
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
            <NotebookList list={bookList} createBookComplete={createBookComplete}/>
            <Notelist/>
            <Note/>
          </div>
        </div>
    )
  }
}

export default App
