import Navbar from "../Components/Shared/Navbar";
import Home from "../Pages/Home/Home";


const Root = () => {
    return (
        <div className="font-Poppins">
            <Navbar/>

            <div className="max-w-7xl mx-auto border-2 border-red-500 px-2">
                <Home/>
            </div>
        </div>
    );
};

export default Root;