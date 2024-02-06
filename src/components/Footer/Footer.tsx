import TextField from '@mui/material/TextField';
import "./Footer.css"
import { useDataContext } from '../../context';



export default function Footer() {
    const { isDark } = useDataContext()

    return (
        <div className={isDark ? "bodyDark" : "bodyLight"}>
            <div className={isDark ? "bodyDark container mx-auto" : "bodyLight container mx-auto"}>
                <div className='footer md:grid md:grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className={isDark ? " footerBackground text-left" : " footerBackground text-left"}>
                        <h1 className={isDark ? "textDark mb-3" : "textLight mb-3"}>COINFLIP</h1>
                        <p className={isDark ? "textDark" : "textLight"}>CoinFlip, the world’s leading bitcoin ATM operator, makes it so flippin’ easy to buy and sell bitcoin via cash, card, or bank transfer.</p>
                        <div className={isDark ? "email-input-wrapper textDark mt-5 mb-2" : "email-input-wrapper textLight mt-5 mb-2"}>
                            {/* <p className={isDark ? "textDark" : "textLight"} style={{ marginBottom: "0.5rem" }}>Your Email</p> */}
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                color={isDark ? "warning" : "primary"}
                                InputLabelProps={{
                                    style: {
                                        color: isDark ? '#ccc' : '#000', // Label text color based on dark mode
                                    },
                                }}
                                InputProps={{
                                    style: {
                                        borderColor: isDark ? '#white' : '#ccc',
                                        color: isDark ? '#ccc' : '#000', // Placeholder text color based on dark mode
                                    },
                                    placeholder: 'Enter your email', // Placeholder text
                                }}
                            />
                        </div>
                        <p className={isDark ? "textDark mt-5" : "textLight mt-5"} >Sign up to get the latest in CoinFlip news, discounts, and more.</p>
                        <p className={isDark ? "textDark mt-2" : "textLight mt-2"}>© 2021 GPD Holdings, LLC FinCEN MSB</p>
                    </div>
                    <ul className={isDark ? "textDark lg:text-center" : "textLight lg:text-center"}>
                        <li className='footer-title'>Company</li>
                        <li className="footer-item">About</li>
                        <li className="footer-item">Careers</li>
                        <li className="footer-item">Press</li>
                        <li className="footer-item">News</li>
                        <li className="footer-item">Merch</li>
                    </ul>
                    <ul className={isDark ? "textDark" : "textLight"}>
                        <li className='footer-title'>Privacy Policy and Terms of Service</li>
                        <li className="footer-item">CoinFlip Privacy Policy</li>
                        <li className="footer-item">CoinFlip Biometrics Privacy Policy</li>
                        <li className="footer-item">CoinFlip Financial Privacy Notice</li>
                        <li className="footer-item">CoinFlip Terms of Service</li>
                        <li className="footer-item">CoinFlip Trade Desk Terms of Service</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
