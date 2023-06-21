import './App.css';

import { Routes,Route } from 'react-router-dom'
import Index from './views/Index/Index';
import About from './views/About/About';
import Content from './views/Content/Content';
import Charts from './views/Chart/Chart';
import Chart1 from './views/Chart1/Chart1'
import Motion from './views/Motion/Motion';
import Test from '@/views/Test/Test'
import NotFound from '@/views/NotFound/NotFound'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='/content' element={<Content />} />
                <Route path='/charts' element={<Charts />} />
                <Route path='/charts1' element={<Chart1 />} />
                <Route path='/motion' element={<Motion />} />
                <Route path='/test' element={<Test />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
