import React, { Component} from 'react'

import Note from '../note/index'
import './index.css'

class Notelist extends Component {
  constructor (props) {
    super()
  }

  render() {
    const {notelist, completeEditNote} = this.props
    return (
      <div className="noteList">
        {
          notelist.length > 0  &&
          notelist.map((note, index) => {
          return <Note key={index} note={note} completeEditNote={completeEditNote}/>
        })

        }
      </div>
    )
  }
}

export default Notelist

