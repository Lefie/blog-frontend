import "./App.css"
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup'
import Blogs from './views/Blogs/Blogs'
import { DisplayBlog } from "./views/DisplayBlog/DisplayBlog";
import { CreateBlog } from "./views/CreateBlog/CreateBlog";
import { AuthorBlog } from "./views/AuthorBlog/AuthorBlog";
import { Authors } from "./views/Authors/Authors";
import MyPage from "./views/MyPage/MyPage";
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes, Link } from 'react-router-dom';
import { EditBlog } from "./views/EditBlog/EditBlog";

function App() {

  

  return (
    <ChakraProvider>
    <div className="App" >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/create_blog' element={<CreateBlog />}/>
        <Route path='/blogs/mypage/:blog_id' element={<DisplayBlog />}/>
        <Route path='/blogs/blog/:blog_id' element={<DisplayBlog />}/>
        <Route path='/blogs/authors' element={<Authors />} />
        <Route path='/blogs/author/:author_name' element={<AuthorBlog />}/>
        <Route path='/blogs/edit/:blog_id' element={<EditBlog />}/>
      </Routes>       
    </div>
    </ChakraProvider>
  );
}

export default App;
