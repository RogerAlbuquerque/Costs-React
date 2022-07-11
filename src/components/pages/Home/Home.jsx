import {Link} from 'react-router-dom'
import './Home.css'
import ImgHome from '../../../images/savings.svg'
import Button from '../../extraComponents/Buttons'
export default function Home(){

    return (
        <article className='home'>
        <h1>Bem vindo ao <span>Costs</span></h1>
         <p>Comece a gerenciar seus projetos agora mesmo</p>
        <Link to="/newproject"> <Button nomeBotao="Criar projeto"/> </Link>
         <img src={ImgHome} className="imgHome" alt="" />
        </article>
    )
    
}