import { FaFacebook,FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css'
export default function Footer(){
    return(
        <footer>
            <ul>
                <li> <a href="https://www.facebook.com"><FaFacebook /></a> </li>
                <li> <a href="https://www.instagram.com"><FaInstagram /></a></li>
                <li> <a href="https://www.linkedin.com"><FaLinkedin/></a></li>
            </ul>
            <p><span>Costs</span>&copy; 2022</p>
        </footer>
    )
}