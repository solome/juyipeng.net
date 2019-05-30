import React, { Component } from 'react'

const log = (...msg) => console.log(...msg)

import '@assets/normalize.css'


export default class Hello extends Component {

  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = { ua: '' }
  }

  render () {
    return (
      <div>
        <canvas className="webgl" ref={this.canvasRef} />
        <div>Hello</div>
      </div>
    )
  }

  async componentDidMount () {

  }
}

