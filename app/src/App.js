import './App.css';
import { Home } from './views/Home/Home.js';
import { BlogList } from './views/BlogList/BlogList.js';
import { Blog } from './components/Blog/Blog.js';
import data from './blogs.json'
import { Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="landing">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/blogs' element={<BlogList blogs={data}/>} />
        <Route path='/blogs/:name' element={<Blog />}/>
      </Routes>
    </div>
    
  );
}

export default App;

/*
 <BlogList blogs={data}/> 
*/


