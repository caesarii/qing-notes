import React, { Component} from 'react'
import './index.css'


import Codemirror from 'react-codemirror'
import '../../../node_modules/codemirror/lib/codemirror.css'

// 主题
import '../../../node_modules/codemirror/theme/material.css'
import '../../../node_modules/codemirror/theme/3024-day.css'
import '../../../node_modules/codemirror/theme/dracula.css'
import '../../../node_modules/codemirror/theme/duotone-light.css'
import '../../../node_modules/codemirror/theme/twilight.css'

// 语言
import '../../../node_modules/codemirror/mode/javascript/javascript'
import '../../../node_modules/codemirror/mode/python/python'
import '../../../node_modules/codemirror/mode/markdown/markdown'

class Note extends Component {
  constructor() {
    super()
    this.updateCode = this.updateCode.bind(this)
    this.changeMode = this.changeMode.bind(this)
    this.changeTheme = this.changeTheme.bind(this)

    const code = `const con = {name: 'qinghe'} \r\n - header`
    this.state = {
      code: code,
      theme: 'material',
      mode: 'markdown',
    }
  }

  updateCode(newCode){
    this.setState({
      code: newCode,

    })
  }

  changeMode (e) {
    const mode = e.target.value;
    this.setState({
      mode: mode,
    });
  }

  changeTheme (e) {
    const theme = e.target.value;
    this.setState({
      theme: theme,
    });
  }
  render() {
    console.log("note", this.props.note)
    const {title, option: {lineNumbers, mode, theme, readOnly}} = this.props.note

    const options = {
      lineNumbers: lineNumbers,
      mode: mode,
      theme: theme,
      readOnly: readOnly,
    }

    return (
      <div className="noteEditor">
        <div className="editor-toolbar">
          <div className="tool-block">
            <span className="tool-block-title">theme</span>
            <select value={theme} onChange={this.changeTheme}>
              <option value="material">material</option>
              <option value="twilight">twilight</option>
              <option value="duotone-light">duotone-light</option>
              <option value="dracula">dracula</option>
              <option value="3024-day">3024-day</option>
            </select>
          </div>
          <div className="tool-block">
            <span className="tool-block-title">mode</span>
            <select value={mode} onChange={this.changeMode}>
              <option value="markdown">markdown</option>
              <option value="javascript">javascript</option>
              <option value="python">python</option>
            </select>
          </div>


        </div>
        
        <Codemirror
          ref="editor"
          value={title}
          onChange={this.updateCode}
          options={options}
          autofocus={true}
        />
      </div>
    )
  }
}

export default Note

