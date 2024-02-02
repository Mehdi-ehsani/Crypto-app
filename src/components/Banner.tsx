// image
import bitcoinImg from "../assets/Bitcoin.png";
import etheriumImg from "../assets/Etherium.png";
import liteCoinImg from "../assets/LiteCoin.png";
import moneroImg from "../assets/Monero.png";
import star1Img from "../assets/star-img-1.png";
import star2Img from "../assets/star-img-2.png";
import star3Img from "../assets/star-img-3.png";
import star4Img from "../assets/star-img-4.png";

// css
import styles from "../styles/banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
        <h1>We make crypto<br/>clear and simple</h1>
        <p>Buy, sell, and grow your crypto with CoinFlip, the platform dedicated<br/> to every trader at every level.</p>
        <button className={styles.btn}>Get Started</button>
        <div className={styles.imageContainer}>
           <img className={styles.coin} src={bitcoinImg} alt="coinImg" />
           <img className={styles.coin} src={moneroImg} alt="coinImg" />
           <img className={styles.coin} src={liteCoinImg} alt="coinImg" />
           <img className={styles.coin} src={etheriumImg} alt="coinImg" />
           <img className={styles.coin} src={star1Img} alt="coinImg" />
           <img className={styles.coin} src={star2Img} alt="coinImg" />
           <img className={styles.coin} src={star3Img} alt="coinImg" />
           <img className={styles.coin} src={star4Img} alt="coinImg" />
           <div className={styles.circleOne}></div>
           <div className={styles.circleTwo}></div>
        </div>
    </div>
  )
}

export default Banner