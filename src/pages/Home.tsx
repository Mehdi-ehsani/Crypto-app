import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Support from "../components/Support";
import FirstStep from "../components/FirstStep";
import ReceiveMail from "../components/ReceiveMail";
import CoinContainer from "../components/CoinContainer";

const Home = () => {
  return (
    <>
     <Banner/>
     <Cards/>
     <Info/>
     <Support/>
     <CoinContainer/>
     <FirstStep/>
     <ReceiveMail/>
     <Footer/>
    </>
  )
}

export default Home
