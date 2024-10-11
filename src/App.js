import "./App.css"
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup'
import Blogs from './views/Blogs/Blogs'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes, Link } from 'react-router-dom';


function App() {


  return (
    <ChakraProvider>
    <div className="App" >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>      
    </div>
    </ChakraProvider>
  );
}

export default App;
