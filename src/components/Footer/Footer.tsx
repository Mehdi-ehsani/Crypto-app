import TextField from '@mui/material/TextField';
import "./Footer.css"
import { useDataContext } from '../../context';

export default function Footer() {
    const { isDark } = useDataContext()
    return (
        <div className={isDark?"bodyDark container mx-auto":"bodyLight container mx-auto"}>
            <div className='footer md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <ul className={isDark?"textDark footerBackground text-center":"textLight footerBackground text-center"}>
                    {/* <li className='footer-title'><img className='footer-logo' src={logo} alt="logo" /></li> */}
                    <li className="footer-item">Dhaka, Bangladesh</li>
                    <li className="footer-item">0943833399</li>
                    <li className="footer-item">support@proxylab.com</li>
                </ul>
                <ul className={isDark?"textDark text-center":"textLight text-center"}>
                    <li className='footer-title'>Our Social Media</li>
                    <li className="footer-item">Dribbble</li>
                    <li className="footer-item">Behance</li>
                    <li className="footer-item">Medium</li>
                    <li className="footer-item">Instagram</li>
                    <li className="footer-item">Facebook</li>
                    <li className="footer-item">Twitter</li>
                </ul>
                <div className='grid gap-y-4 col-span-2 lg:col-auto lg:text-left  text-center'>
                    <a className={isDark?"textDark footer-title text-center":"textLight footer-title text-center"}>Join a Newsletter</a>
                    <div className='text-center'>
                        <p className={isDark?"textDark text-center":"textLight text-center"} style={{ marginBottom: "0.5rem" }}>Your Email</p>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </div>
                    <div className=' text-center' style={{ marginTop: "0.5rem" }}><a className={isDark?"textDark main-btn header-btn p-2":"textLight main-btn header-btn p-2"} href="#">Subscribe</a></div>
                </div>
            </div>
        </div>
    )
}
