import React from 'react'
import Inc from './inc'

const App = ({count}) => {
  return (
    <div>
      <center>
        Count from App JS component : {count} <br/><hr/>
        <Inc/>
      </center>
    </div>
  )
}

export default App
