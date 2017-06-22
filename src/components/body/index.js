import React, { Component} from 'react'

import NotebookList from '../notebookList/index'
import Notelist from '../noteList/index'
import Note from '../noteEditor/index'
import './index.css'


class Body extends Component {

  render() {
    return (
      <div className="body">
        <NotebookList/>
        <Notelist/>
        <Note/>
      </div>
    )
  }
}

export default Body