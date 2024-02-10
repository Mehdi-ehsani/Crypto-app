import { Link } from "react-router-dom";
import "../global.css";
import { useDataContext } from "../context";

const ReceiveMail = () => {
	const { isDark } = useDataContext();
	return (
		<div className="flex flex-col items-center justify-center">
			<h1
				className={
					isDark
						? "lite-mode-text text-[1.2rem] uppercase md:text-[3.5rem] md:font-extrabold"
						: "dark-mode-text text-[1.2rem] uppercase md:text-[3.5rem] md:font-extrabold"
				}
			>
				Receive transmissions
			</h1>
			<p className="p-color text-[0.7rem] md:text-[1.2rem] my-4">
				Unsubscribe at any time.
				<Link to="/" className={isDark ? "lite-mode-text" : "dark-mode-text"}>
					Privacy policy↗
				</Link>
			</p>
			<input
				className={
					isDark
						? "lite-mode-text bg-transparent border-solid border-2 mb-8 mt-3  w-3/4 h-[40px] md:w-[400px] md:h-[50px] rounded-xl p-2"
						: "dark-mode-text bg-transparent border-solid border-2 mb-8 mt-3  w-3/4 h-[40px] md:w-[400px] md:h-[50px] rounded-xl p-2"
				}
				type="email"
				placeholder="Email address"
			/>
		</div>
	);
};

export default ReceiveMail;
