import { Link } from "react-router-dom";
// image
import firstImg from "../assets/image/firstStep-img.png";
import "../global.css";
import { useDataContext } from "../context";

const FirstStep = () => {
	const { isDark } = useDataContext();

	return (
		<div className="flex flex-col items-center justify-center p-4 md:flex-row">
			<div className="md:w-2/5 w-full flex flex-col items-center md:block">
				<h1
					className={
						isDark
							? "lite-mode-text md:text-[2.5rem] text-[1.2rem] font-extrabold mb-2 text-center md:text-left"
							: "dark-mode-text md:text-[2.5rem] text-[1.2rem] font-extrabold mb-2 text-center md:text-left"
					}
				>
					Take your first step into safe, secure crypto investing
				</h1>
				<p
					className={
						isDark
							? "p-color mb-7 md:text-[1rem] text-[0.8rem] text-center md:text-left"
							: "p-color mb-7 md:text-[1rem] text-[0.8rem] text-center md:text-left"
					}
				>
					Separated they live in Bookmarks right at the coast of the famous
					Semantics, large language ocean Separated they live in Bookmarks right
					at the coast.
				</p>
				<Link
					className={
						isDark
							? "lite-mode-text  py-3 px-4 rounded-lg border-2 border-[#f3f3f3]"
							: "dark-mode-text  py-2 px-3 rounded-lg border-2 border-[#0b0b0f]"
					}
					to="/"
				>
					Get Started
				</Link>
			</div>
			<img src={firstImg} alt="img" />
		</div>
	);
};

export default FirstStep;
