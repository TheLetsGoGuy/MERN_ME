// import React from 'react'
// import Card from './components/Card'
// import Button from './components/Button'
// import Home from './pages/Home'
// import Contact from './pages/Contact'

// const App = () => {
//   return (
//     <>
//     {/* <Home/> */}
//     <Contact/>
//     {/* <Button text="log in" bg="green"/><br/>
//     <Button text="logout" bg="red"/><br/>
//     <Button text="registration"/> */}
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Login from './components/Login'
// import {useState} from 'react'
// import { ContextStore } from './context/ContextStore'

// const App = () => {
//   const [data,setData] = useState(["Amartya Chatterjee"])
//   console.log(data)
//   return (
//     <ContextStore.Provider value={data}>
//       App:<Login/></ContextStore.Provider>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom' 
import Home from './pages/Home'
import Contact from './pages/Contact'
import Registration from './pages/Auth/Registration'
import Login from './pages/Auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App