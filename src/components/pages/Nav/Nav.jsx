import {Link} from 'react-router-dom'
import Logo from '../../../images/costs_logo.png'
import './Nav.css'
export default function Nav(){
    return(
        <nav>
           <img src={Logo} alt="Logo do costs" />
            <ul>
                <li><Link to="/Costs-React/">         Home      </Link></li>
                <li><Link to="/projects"> Projetos  </Link></li>
                <li><Link to="/company">  Empresa   </Link></li>
                <li><Link to="/contact"> Contato   </Link></li>
            </ul>
        </nav>
    )
}