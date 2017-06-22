import React, { Component} from 'react'

import Note from '../note/index'
import './index.css'

class Notelist extends Component {

  render() {
    return (
      <div className="noteList">
        <Note/>
        <Note/>
        <Note/>
      </div>
    )
  }
}

export default Notelist

