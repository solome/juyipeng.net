import React from 'react'
import ReactDOM from 'react-dom'


import App from './Hello'

// Client-Side Render
if (typeof document !== 'undefined') {
  ReactDOM.hydrate(
    <App />,
    document.getElementById('ExtrudeWalls')
  )
}

// Server-Side Render
export default function (state) {
  return <App data={state} />
}

