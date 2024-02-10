import { Link } from "react-router-dom";
import { useDataContext } from "../context";
import "../global.css";
const Info = () => {
	const { isDark } = useDataContext();

	return (
		<div className={"flex flex-col items-center justify-center w-full p-4"}>
			<h1
				className={
					isDark
						? "text-xl lite-mode-text font-extrabold mb-6  text-center sm:text-4xl"
						: "text-xl dark-mode-text font-extrabold mb-6 text-center sm:text-4xl"
				}
			>
				A crypto investment platform that invests in you{" "}
			</h1>
			<p
				className={
					isDark ? "p-color text-center mb-4" : "p-color text-center mb-4"
				}
			>
				We invest more resources than any other platrom in making sure great
				<br /> support from real people is a click away, whenever you need it.
			</p>
			<Link
				to="/"
				className="bg-btn-404 w-[156px] h-[56px] flex items-center justify-center rounded-[10px] tracking-[1px] hover:scale-[103%] ease-in duration-200 "
			>
				Get Started
			</Link>
		</div>
	);
};

export default Info;
