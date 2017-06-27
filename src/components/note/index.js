import React, { Component } from 'react'
import './index.css'

class Note extends Component {
  constructor (props) {
    super()
    this.completeEdit = this.completeEdit.bind(this)
  }
  completeEdit(e) {
    const type = e.type
    const keyCode = e.keyCode
    const val = e.target.value
    if(type === 'blur' || (type === 'keydown' && keyCode === 13)) {
      console.log('blur')
      this.props.completeEditNote(val)
    }
  }
  render () {
    const {title, status} = this.props.note
    const {completeEdit, } = this
    const ct = '06-06'
    return (
      <div className="note">
        <div className="note-date">{ct}</div>
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

export default Note

