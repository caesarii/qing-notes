import React, { Component} from 'react'

import Btn from '../../base/btn/index'

import './index.css'

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-titleBar">
          <Btn styles={"f-r"}>
            button
          </Btn>
          <Btn styles={"f-r"}>
            button
          </Btn>
        </div>
        <div className="header-toolBar">
          tool bar
        </div>
      </div>
    )
  }
}

export default Header
