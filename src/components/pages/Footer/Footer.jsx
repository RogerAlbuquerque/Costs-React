import { FaFacebook,FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css'
export default function Footer(){
    return(
        <footer>
            <ul>
                <li> <a href="https://www.facebook.com"  target='_blank'><FaFacebook /></a> </li>
                <li> <a href="https://www.instagram.com" target='_blank'><FaInstagram /></a></li>
                <li> <a href="https://www.linkedin.com"  target='_blank'><FaLinkedin/></a></li>
            </ul>
            <p><span>Costs</span>&copy; 2022</p>
        </footer>
    )
}