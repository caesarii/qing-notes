import React, {Component} from 'react'

import classNames from 'classnames'
import './index.css'

class Btn extends Component {
  constructor (props) {
    super()
  }


  render() {
    const cls = classNames({
      btn: true,
      [this.props.styles]: true
    })

    return(
      <div className={cls}>
        {this.props.children}
      </div>
    )
  }
}

export default Btn