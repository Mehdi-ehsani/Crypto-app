import { useDataContext } from "../context";
import Coin from "./Coin";

const CoinContainer = () => {
	const { isDark, data } = useDataContext();

	return (
		<div className="flex items-center justify-center sm:px-72">
			<div
				className={
					isDark
						? "p-4 bg-[#13131b] w-full h-[500px] rounded-3xl border-solid border-[#18c8ff] border-2"
						: "p-4 bg-[#ededed] w-full h-[500px] rounded-3xl border-solid border-[#18c8ff] border-2"
				}
			>
				{data.slice(0,10).map((coin) => (
					<Coin
						key={coin.id}
						name={coin.name}
						symbol={coin.symbol}
						change={coin.market_cap_change_percentage_24h}
						price={coin.current_price}
					/>
				))}
			</div>
		</div>
	);
};

export default CoinContainer;
