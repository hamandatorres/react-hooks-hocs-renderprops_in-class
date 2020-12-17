import React from 'react'
import Toggle from './Toggle'
import ToggleRP from './ToggleRP'
import Square from '../HOCS/Square'
import '../style.css'

const RenderProps = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <h1>HERE ARE THE SECRETS</h1>
      </Toggle>

      <ToggleRP
        render={(isTrue, toggleBoolean) => {
          return (
            <div>
              <Square isAdmin darkMode={isTrue} />
              <button onClick={toggleBoolean}>Switch it up</button>
            </div>
          )
        }}
      />
    </section>
  )
}
export default RenderProps
