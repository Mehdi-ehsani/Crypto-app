
import "../global.css"
import { FaArrowRight } from "react-icons/fa";
import cardImg1 from '../assets/image/card 1.png'
import cardImg2 from '../assets/image/card 2.png'
import cardImg3 from '../assets/image/card 3.png'
import { useDataContext } from "../context";


export default function Cards() {
    const { isDark } = useDataContext()
    // card
    return (
        <div className={isDark?"bodyDark":"bodyLight"}>

            <div className={isDark ? "bodyDark card-container mx-auto  flex items-center justify-center gap-4  flex-wrap mb-4 " : "bodyLight card-container mx-auto p-2 mt-10px flex items-center justify-center gap-4 flex-wrap my-4"}>
               
                    <div className={isDark ? "cardDark rounded-xl max-w-[360px] min-w-[200px]  flex items-center justify-center flex-col  text-center pb-4 pr-4 pl-4" : "cardLight   text-center pb-4 pr-4 pl-4 rounded-xl max-w-[360px] min-w-[200px] flex items-center justify-center flex-col "}>
                        <img src={cardImg1} alt="card-img" />
                        <h1 className={isDark ? "text-3xl font-bold mt-5 mb-4" : "textLight text-3xl font-bold mt-5 mb-4"}>Trade Desk</h1>
                        <p className={isDark ? "text-slate-400 mt-4 mb-4  max-w-[340px] min-w-[100px] " : "textLight mt-4 mb-4  max-w-[340px] min-w-[100px]"}>Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform ,
                        for everyone</p>
                        <div className={isDark ? "cardLinkDark card-link__wrapper flex items-center justify-center" : "cardLinkLight card-link__wrapper flex items-center justify-center"}>
                            <a className="card-link mr-3" href="#">
                                Get Started
                            </a>
                            <FaArrowRight className="card-arrow-icon" />
                        </div>
                    </div>

                    <div className={isDark ? "cardDark rounded-xl max-w-[360px] min-w-[200px] flex items-center justify-center flex-col  text-center pb-4 pr-4 pl-4" : "cardLight rounded-xl max-w-[360px] min-w-[200px] flex items-center justify-center flex-col  text-center pb-4 pr-4 pl-4"}>
                        <img src={cardImg2} alt="card-img" />
                        <h1 className={isDark ? "text-3xl font-bold mt-5 mb-4" : "textLight text-3xl font-bold mt-5 mb-4"}>CoinFlip ATMs</h1>
                        <p className={isDark ? "text-slate-400 mt-4 mb-4  max-w-[340px] min-w-[100px] " : "textLight mt-4 mb-4   max-w-[340px] min-w-[100px]"}>We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto</p>
                        <div className={isDark ? "cardLinkDark card-link__wrapper flex items-center justify-center" : "cardLinkLight card-link__wrapper flex items-center justify-center"}>
                            <a className="card-link mr-3" href="#">
                                Find an ATM
                            </a>
                            <FaArrowRight className="card-arrow-icon" />
                        </div>
                    </div>

                    <div className={isDark ? "cardDark rounded-xl max-w-[360px] min-w-[200px] flex items-center justify-center flex-col  text-center pb-4 pr-4 pl-4" : "cardLight rounded-xl max-w-[360px] min-w-[200px] flex items-center justify-center flex-col  text-center pb-4 pr-4 pl-4"}>
                        <img src={cardImg3} alt="card-img" />
                        <h1 className={isDark ? "text-3xl font-bold mt-5 mb-4" : "textLight text-3xl font-bold mt-5 mb-4"}>CoinFlip Wallet</h1>
                        <p className={isDark ? "text-slate-400 mt-4 mb-4  max-w-[340px] min-w-[100px] " : "textLight mt-4 mb-4  max-w-[340px] min-w-[100px] "}>Store your growing investments in our
                            non-custodial wallet that gives you access to a full suite of DeFi services in one place</p>
                        <div className={isDark ? "cardLinkDark card-link__wrapper flex items-center justify-center" : "cardLinkLight card-link__wrapper flex items-center justify-center"}>
                            <a className="card-link mr-3" href="#">
                                Download the App
                            </a>
                            <FaArrowRight className="card-arrow-icon" />
                        </div>
                    </div>

                </div>

        </div>
    )
}
