import './App.css';

import { NavLink,Routes,Route } from 'react-router-dom'
import Index from './views/Index/Index';
import About from './views/About/About';
import Content from './views/Content/Content';
import Charts from './views/Chart/Chart';
import Chart1 from './views/Chart1/Chart1'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='/content' element={<Content />} />
                <Route path='/charts' element={<Charts />} />
                <Route path='/charts1' element={<Chart1 />} />
                <Route path="*" element={ <h2>not fournd</h2> }></Route>
            </Routes>
        </>
    );
}

export default App;
