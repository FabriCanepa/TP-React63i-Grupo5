import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'

// import Ejercicio1 from './components/Ejercicios/Ejercicio1.jsx'
// import Ejercicio2 from './components/Ejercicios/Ejercicio2.jsx'
// import Ejercicio3 from './components/Ejercicios/Ejercicio3.jsx'
// import Ejercicio7 from './components/Ejercicios/Ejercicio7.jsx'
import Employees from './components/Employees'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <Ejercicio1/> */}
{/* <Ejercicio2 myFriend= 'My Friend'/> */}
{/* <Ejercicio3/> */}
{/* <Ejercicio7 /> */}
<Employees/>
  </React.StrictMode>,
)
