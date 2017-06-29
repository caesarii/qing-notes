import React, { Component} from 'react'

import Note from '../notelistItem/index'
import './index.css'

class Notelist extends Component {
  constructor (props) {
    super()
  }

  render() {
    const {notelist, completeNoteCreation, activateNote} = this.props
    return (
      <div className="noteList">
        {
          notelist.length > 0  &&
          notelist.map((note, index) => {
          return <Note key={index} note={note} completeNoteCreation={completeNoteCreation} activateNote={activateNote}/>
        })

        }
      </div>
    )
  }
}

export default Notelist

