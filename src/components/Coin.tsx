import { useDataContext } from "../context";
const Coin = (props: {
	name: string;
	symbol: string;
	change: number;
	price: number;
}) => {
	const color: string = props.change > 0 ? "text-green-600" : "text-red-700";
	const { isDark } = useDataContext();
	return (
		<div className="flex items-center justify-between">
			<p
				className={
					isDark
						? "w-3/12 h-12 pt-3 text-left border-solid border-[#ffffff22] border-b-2"
						: "w-3/12 h-12 pt-3 text-left border-solid border-[#898ca9] border-b-2 dark-mode-text"
				}
			>
				{props.name}
			</p>
			<p
				className={
					isDark
						? "text-[#933ffe] uppercase font-bold w-3/12 h-12 pt-3 text-center border-solid border-[#ffffff22] border-b-2"
						: "text-[#933ffe] uppercase font-bold w-3/12 h-12 pt-3 text-center border-solid border-[#898ca9] border-b-2"
				}
			>
				{props.symbol}
			</p>
			<p
				className={
					isDark
						? `w-3/12 h-12 pt-3 text-center border-solid border-[#ffffff22] border-b-2`
						: `w-3/12 h-12 pt-3 text-center border-solid border-[#898ca9] border-b-2 dark-mode-text`
				}
			>
				{props.price} $
			</p>
			<p
				className={
					isDark
						? `w-2/12 h-12 pt-3 border-solid border-[#ffffff22] border-b-2 ${color}`
						: `w-2/12 h-12 pt-3 border-solid border-[#898ca9] border-b-2 ${color}`
				}
			>
				{props.change} %
			</p>
			<p
				className={
					isDark
						? "w-2/12 h-12 pt-3 text-right border-solid border-[#ffffff22] border-b-2 hover:cursor-pointer"
						: "w-2/12 h-12 pt-3 text-right border-solid border-[#898ca9] border-b-2 hover:cursor-pointer dark-mode-text"
				}
			>
				Trade Now{" "}
			</p>
		</div>
	);
};

export default Coin;
