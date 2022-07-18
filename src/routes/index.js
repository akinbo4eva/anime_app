import { BrowserRouter, Routes, Route} from "react-router-dom";
import Details from "../Pages/Details"
import Home from "../Pages/Home";


const AppRoute = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:name" element={<Details />} />
            </Routes>  
        </BrowserRouter>
    )
}

export default AppRoute;