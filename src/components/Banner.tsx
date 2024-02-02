import bitcoinImg from "../assets/Bitcoin.png";
import etheriumImg from "../assets/Etherium.png";
import liteCoinImg from "../assets/LiteCoin.png";
import moneroImg from "../assets/Monero.png";
import star1Img from "../assets/star-img-1.png";
import star2Img from "../assets/star-img-2.png";
import star3Img from "../assets/star-img-3.png";
import star4Img from "../assets/star-img-4.png";

const Banner = () => {
  return (
    <div>
        <h1>We make crypto clear and simple</h1>
        <p>Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</p>
        <button>Get Started</button>
        <div>
           <img src={bitcoinImg} alt="coinImg" />
           <img src={moneroImg} alt="coinImg" />
           <img src={liteCoinImg} alt="coinImg" />
           <img src={etheriumImg} alt="coinImg" />
           <img src={star1Img} alt="coinImg" />
           <img src={star2Img} alt="coinImg" />
           <img src={star3Img} alt="coinImg" />
           <img src={star4Img} alt="coinImg" />
        </div>
    </div>
  )
}

export default Banner