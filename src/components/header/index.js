import React, { Component} from 'react'

import Btn from '../../base/btn/index'

import './index.css'

class Header extends Component {

  render() {
    return (
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
            <div className="btn-newBook" />
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
    )
  }
}

export default Header
