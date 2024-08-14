import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/About';
import Services from './components/Services';



const appRouting = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            }
            
            ,{
                path: "/contact",
                element: <Contact />
            }
            ,{
                path: "/about",
                element: <AboutUs />
            }
            ,{
                path: "/services",
                element: <Services />
            }
        ]
    }
])
export default appRouting;