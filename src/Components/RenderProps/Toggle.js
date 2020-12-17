import React, { useState } from 'react'
import withStyles from '../HOCS/withStyles'

const Toggle = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={props.style}>
      {isOpen ? props.children : null}
      <button onClick={() => setIsOpen(!isOpen)}>Open/Close</button>
    </div>
  )
}

export default withStyles(Toggle)
