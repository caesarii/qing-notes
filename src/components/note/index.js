import React, {Component} from 'react'
import './index.css'

class Note extends Component {
  constructor (props) {
    super()

    this.state = {
      date: '6月6日',
      title: 'my frist note',
    }
  }
  render() {
    const {date, title } = this.state
    return (
      <div className="note">
        <div className="note-date">{date}</div>
        <div className="note-title">{title}</div>
      </div>
    )
  }
}

export default Note

