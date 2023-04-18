import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import ProductsList from './products/components/ProductsList'

const App = () => {
  return (
<>
<BrowserRouter>

<Routes>

<Route path='/*' element={<ProductsList/>} />


</Routes>


</BrowserRouter>
</>
  )
}

export default App
