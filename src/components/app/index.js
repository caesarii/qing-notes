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
    this.createBookComplete = this.createBookComplete.bind(this)
    this.selectNotebook = this.selectNotebook.bind(this)
    this.createNote = this.createNote.bind(this)
    this.completeEditNote = this.completeEditNote.bind(this)
    this.state = {
      // 当前 book 的 id
      currNotebook: 0,
      currNoteId: 0,
      bookList: [
        {
          id: 0,
          type: 'notebook',
          title: '全部便签',
          totalNum: '0',
          status: 'done',
          active: false,
        },
      ],
      notelist: []
    }
  }

  // newBook: {type, title, totalNum, status}
  createBook () {
    const newBook = {
      type: 'notebook',
      title: 'new folder',
      totalNum: '0',
      status: 'create',
      active: false,
    }

    this.setState((prev) => {
      const booknoteNum = prev.bookList.length
      newBook.id = booknoteNum + 1
      console.log(newBook.id)
      prev.bookList.push(newBook)
      return {
        bookList: prev.bookList,
      }
    })
  }

  createBookComplete (e) {
    const type = e.type
    const keyCode = e.keyCode
    const val = e.target.value
    if (type === 'blur' || (type === 'keydown' && keyCode === 13)) {
      this.setState((prev) => {
        const prevbooklist = prev.bookList
        prevbooklist[prevbooklist.length - 1].title = val || '未命名'
        prevbooklist[prevbooklist.length - 1].status = 'done'
        return {
          bookList: prevbooklist,
        }
      })
    }

  }

  selectNotebook (id) {
    this.setState((prev) => {
      const newList = prev.bookList
      newList.forEach((book, index) => {
        if (book.id === id) {
          book.active = true
        } else {
          book.active = false
        }
      })
      return {
        currNotebook: id,
        bookList: newList,
      }
    })
  }

  createNote() {
    console.log('create note')
    const noteId = this.state.notelist.length
    const bookId = this.state.currNotebook
    const newNote = {
      id: noteId,
      title: '',
      ct: Date.now(),
      status: 'editing',
      active: false,
      bookId: bookId
    }

    const newNotelist = this.state.notelist
    newNotelist.push(newNote)
    this.setState({
      currNoteId: noteId,
      notelist: newNotelist
    })
  }

  completeEditNote(value) {
    this.setState((prev) => {
      const newNotelist = prev.notelist
      newNotelist.forEach((note, index) => {
        if(note.id === this.state.currNoteId) {
          note.title = value
          note.status = 'done'
        }
      })

      return {
        notelist: newNotelist
      }
    })

  }

  render () {
    const {createBook, createBookComplete, selectNotebook, createNote, completeEditNote} = this
    const {bookList, notelist,} = this.state
    return (
      <div className="App">

        {/* header */}
        <div className="header">
          <div className="header-titleBar">
            <div className="header-icon"/>
            <div className="header-title">
              Qing Notes
            </div>
            <Btn styles={'f-r'}>
              <div className="btn-newNote" onClick={createNote}/>
            </Btn>
            <Btn styles={'f-r'}>
              <div className="btn-newBook" onClick={createBook}/>
            </Btn>
          </div>
          <div className="header-toolBar">
            <Btn styles={'f-l'}>
              <div className="btn-img"/>
            </Btn>
            <Btn styles={'f-l'}>
              <div className="btn-move"/>
            </Btn>
            <Btn styles={'f-r'}>
              <div className="btn-share"/>
            </Btn>
            <Btn styles={'f-r'}>
              <div className="btn-delete"/>
            </Btn>
          </div>
        </div>

        {/* body */}
        <div className="body">
          <NotebookList list={bookList} createBookComplete={createBookComplete}
                        selectNotebook={selectNotebook}/>
          <Notelist notelist={notelist} completeEditNote={completeEditNote} />
          <Note/>
        </div>
      </div>
    )
  }
}

export default App
