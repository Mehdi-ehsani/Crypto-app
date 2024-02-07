import { Link } from "react-router-dom"
// image
import supportImg from "../assets/image/support-img.png"
import "../global.css"
import { useDataContext } from '../context';
const Support = () => {
  const { isDark } = useDataContext();

  return (
    <div className="flex items-center justify-center p-8">
       <img src={supportImg} alt="img" />
       <div className="w-2/5">
        <h1 className={isDark ? "lite-mode-text text-[3rem] font-extrabold mb-2" : "dark-mode-text text-[3rem] font-extrabold mb-2"}>24/7 access to full service customer support</h1>
        <p className={isDark ? "p-color mb-7" : "p-color mb-7"}>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</p>
        <Link className={isDark ? "lite-mode-text  py-3 px-4 rounded-lg border-2 border-[#f3f3f3]" : "dark-mode-text  py-2 px-3 rounded-lg border-2 border-[#0b0b0f]"} to="/" >Get Started</Link>
       </div> 
    </div>
  )
}

export default Support