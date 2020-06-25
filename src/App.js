import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'

const App = () =>
  (
    <div>
      <h1 id="something-import">Adopt me!</h1>
      <Pet key="pet1" name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet key="pet2" name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
      <Pet key="pet3" name="Doink" animal="Cat" breed="Mix"></Pet>
    </div>
  )

ReactDOM.render(React.createElement(App), document.getElementById('root'));
