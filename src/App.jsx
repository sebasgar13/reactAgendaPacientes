import {useState} from 'react';

import Contenedor from './components/Contenedor';

function App() {
    const [citas, setCitas] = useState([])

  return (
      <div className="w-full h-screen text-center">
        <Contenedor />
    </div>
  )
}

export default App
