import React, { Component } from 'react'

import './index.css'

import classNames from 'classnames'

class NoteListItem extends Component {
  constructor (props) {
    super()
    this.completeEdit = this.completeEdit.bind(this)
    this.activateNote = this.activateNote.bind(this)
  }

  completeEdit(e) {
    const type = e.type
    const keyCode = e.keyCode
    const val = e.target.value
    if(type === 'blur' || (type === 'keydown' && keyCode === 13)) {
      console.log('blur')
      this.props.completeNoteCreation(val)
    }
  }


  activateNote() {
    const activateNote = this.props.activateNote
    activateNote(this.props.note.id)
  }


  render () {
    const {title, status, ct, active} = this.props.note
    const {completeEdit, activateNote} = this
    const createTime = ct.toLocaleString()

    const noteCls = classNames({
      note: true,
      'note-active': active
    })

    return (
      <div className={noteCls} onClick={activateNote}>
        <div className="note-date">{createTime}</div>
        {
          status === 'done' &&
          <div className="note-title">{title}</div>
        }
        {
          status === 'editing' &&
            <input className="note-title-editing" autoFocus={true} onBlur={completeEdit} onKeyDown={completeEdit}/>
        }
      </div>
    )
  }
}

export default NoteListItem

