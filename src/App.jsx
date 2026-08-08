import './App.css'
import Nav from "./components/Nav/Nav";
import Head from "./components/Head-section/Head";
import Footer from './components/Footer/Footer';
import About from './pages/about/About';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';


export default function App(){
    return(
        <>
        <Routers>
            <Route path='/' element={About}/>
            <Route path='/' element={Home}/>
            <Route path='*' element={NotFound}/>
        </Routers>
        </>
    )
}