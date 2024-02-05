
import { Link } from "react-router-dom";
import "../global.css";

const NotFound = () => {
	return (
		<div className="bg-404 bg-contain bg-no-repeat flex bg-center w-full  min-h-screen">
<<<<<<< HEAD
			<Link
				to="/"
				className=" h-13 absolute top-3/4 left-1/2 translate-x-[-50%] 
        		z-2 px-4 py-3 rounded-md bg-btn-404 hover:scale-[103%] 
		 		ease-in duration-300 border-2 
		 		border-white font-semiboldbold">
				Back to Home
			</Link>
=======
			<a href="/" className=" h-13 absolute top-3/4 left-1/2 translate-x-[-50%] 
        z-2 px-4 py-3 rounded-md bg-btn-404 hover:scale-[103%]  ease-in duration-300 border-2 border-white font-semiboldbold">
				Back to HomePage
			</a>
>>>>>>> c39a8459bcb26ad328d8150b80076d49f0c631c3
		</div>
	);
};
export default NotFound;
