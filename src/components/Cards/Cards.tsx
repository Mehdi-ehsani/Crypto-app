import "./card.css";
import { FaArrowRight } from "react-icons/fa";
import cardImg1 from '../../assets/image/card 1.png'
import cardImg2 from '../../assets/image/card 2.png'
import cardImg3 from '../../assets/image/card 3.png'
<<<<<<< HEAD

=======
import { useDataContext } from "../../context";
// import '../../src/styles/cards.module.css'
>>>>>>> afa3f24752c2c322ba52e9fe1cd0ae7d1dc53e2b

export default function Cards() {
    const { isDark } = useDataContext()

    return (
<<<<<<< HEAD
        <div className='container mx-auto'>
            <div className='card-wrapper flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-1'>
                <div className="card text-center pb-4 pr-4 pl-4">
                    <img src={cardImg1} alt="card-img" />
                    <h1 className="text-3xl font-bold mt-5 mb-4">Trade Desk</h1>
                    <p className="text-slate-400 mt-4 mb-4">Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform and me change the text</p>
                    <div className="card-link__wrapper flex items-center justify-center">
                        <a className="card-link mr-3" href="#">
                            Get Started
                        </a>
                        <FaArrowRight className="card-arrow-icon" />
=======
        <div className={isDark?"bodyDark":"bodyLight"}>
            <div className={isDark ? "bodyDark container mx-auto pt-10 pb-10" : "bodyLight container mx-auto pt-10 pb-10"}>
                <div className='card-wrapper flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-1'>
                    <div className={isDark ? "cardDark card  text-center pb-4 pr-4 pl-4" : "cardLight card  text-center pb-4 pr-4 pl-4"}>
                        <img src={cardImg1} alt="card-img" />
                        <h1 className={isDark ? "text-3xl font-bold mt-5 mb-4" : "textLight text-3xl font-bold mt-5 mb-4"}>Trade Desk</h1>
                        <p className={isDark ? "text-slate-400 mt-4 mb-4" : "textLight mt-4 mb-4"}>Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform</p>
                        <div className={isDark ? "cardLinkDark card-link__wrapper flex items-center justify-center" : "cardLinkLight card-link__wrapper flex items-center justify-center"}>
                            <a className="card-link mr-3" href="#">
                                Get Started
                            </a>
                            <FaArrowRight className="card-arrow-icon" />
                        </div>
>>>>>>> afa3f24752c2c322ba52e9fe1cd0ae7d1dc53e2b
                    </div>
                    <div className={isDark ? "cardDark card  text-center pb-4 pr-4 pl-4" : "cardLight card  text-center pb-4 pr-4 pl-4"}>
                        <img src={cardImg2} alt="card-img" />
                        <h1 className={isDark ? "text-3xl font-bold mt-5 mb-4" : "textLight text-3xl font-bold mt-5 mb-4"}>CoinFlip ATMs</h1>
                        <p className={isDark ? "text-slate-400 mt-4 mb-4" : "textLight mt-4 mb-4"}>We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto</p>
                        <div className={isDark ? "cardLinkDark card-link__wrapper flex items-center justify-center" : "cardLinkLight card-link__wrapper flex items-center justify-center"}>
                            <a className="card-link mr-3" href="#">
                                Find an ATM
                            </a>
                            <FaArrowRight className="card-arrow-icon" />
                        </div>
                    </div>
                    <div className={isDark ? "cardDark card  text-center pb-4 pr-4 pl-4" : "cardLight card  text-center pb-4 pr-4 pl-4"}>
                        <img src={cardImg3} alt="card-img" />
                        <h1 className={isDark ? "text-3xl font-bold mt-5 mb-4" : "textLight text-3xl font-bold mt-5 mb-4"}>CoinFlip Wallet</h1>
                        <p className={isDark ? "text-slate-400 mt-4 mb-4" : "textLight mt-4 mb-4"}>Store your growing investments in our
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
        </div>
    )
}
