import React, { Component } from 'react'
import NotebookList from '../notebookList/index'
import Notelist from '../notelist/index'
import Note from '../note/index'
import Btn from '../../base/btn/index'

import './index.css'

import { get } from '../../base/utils/index'

class App extends Component {
  constructor (props) {
    super()

    this.createBook = this.createBook.bind(this)
    this.completeBookCreation = this.completeBookCreation.bind(this)
    this.createNote = this.createNote.bind(this)
    this.completeNoteCreation = this.completeNoteCreation.bind(this)
    this.activateNotebook = this.activateNotebook.bind(this)
    this.activateNote = this.activateNote.bind(this)

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
      notelist: [],
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

  completeBookCreation (e) {
    const type = e.type
    const keyCode = e.keyCode
    const val = e.target.value
    if (type === 'blur' || (type === 'keydown' && keyCode === 13)) {
      this.setState((prev) => {
        const currBook = prev.bookList[prev.bookList.length - 1]
        currBook.title = val || '未命名'
        currBook.status = 'done'
        // currBook.active = true
        return {
          bookList: prev.bookList,
        }
      })
    }

  }

  activateNotebook (id) {
    this.setState((prev) => {
      const newList = prev.bookList
      newList.forEach((book) => {
        book.active = book.id === id
      })
      return {
        currNotebook: id,
        bookList: newList,
      }
    })
  }

  createNote () {
    const noteId = this.state.notelist.length
    const bookId = this.state.currNotebook
    const newNote = {
      id: noteId,
      title: 'new title',
      ct: Date.now(),
      status: 'editing',
      active: false,
      bookId: bookId,
      option: {
        lineNumbers: true,
        mode: 'markdown',
        theme: 'material',
        readOnly: false,
      },
    }

    const newNotelist = this.state.notelist
    newNotelist.push(newNote)
    this.setState({
      currNoteId: noteId,
      notelist: newNotelist,
    })
  }

  completeNoteCreation (value) {
    this.setState((prev) => {
      const newNotelist = prev.notelist
      newNotelist.forEach((note, index) => {
        if (note.id === this.state.currNoteId) {
          note.title = value
          note.status = 'done'
        }
      })

      return {
        notelist: newNotelist,
      }
    })

  }

  activateNote (id) {
    console.log('app activateNote')
    this.setState((prev) => {
      const newList = prev.notelist
      newList.forEach((note) => {
        note.active = note.id === id
      })
      return {
        currNoteId: id,
        notelist: newList,
      }
    })
  }

  render () {
    const {createBook, completeBookCreation, activateNotebook, createNote, completeNoteCreation, activateNote} = this
    const {bookList, notelist, currNotebook} = this.state

    const currNotelist = notelist.map((note) => {
      if (note.bookId === currNotebook) {
        return note
      }
    })

    const currNoteId = this.state.currNoteId
    const currNote = notelist.map((note) => {
      if (note.bookId === currNoteId) {
        return note
      }
    })

    return (
      <div className="App">
        <div className="panel">
          <div className="header">
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
          <NotebookList list={bookList}
                        completeBookCreation={completeBookCreation}
                        activateNotebook={activateNotebook}/>
          {
            currNotelist &&
            <Notelist notelist={currNotelist}
                      completeNoteCreation={completeNoteCreation}
                      activateNote={activateNote}/>
          }

        </div>
        <div className="editor">
          <div className="header">

              <Btn styles={'f-l'}>
                <div className="btn-img"/>
              </Btn>
              <Btn styles={'f-l'}>
                <div className="btn-move"/>
              </Btn>
              <Btn styles={'f-r'}>
                <div className="btn-delete"/>
              </Btn>
              <Btn styles={'f-r'}>
                <div className="btn-save"/>
              </Btn>
          </div>
          <div className="body">
            {
              currNote.length > 0 && <Note note={currNote[0]}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
