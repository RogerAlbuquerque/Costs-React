import {Link} from 'react-router-dom'
import './Projects.css'
import Button from '../../../extraComponents/Buttons'
import BoxProjects from './boxProjects'


export default function Projects(){

    return(
        <article className='allProjects'>
            <section className='headerallProjects'>
                <h1>Meus Projetos</h1>
                <Link to="/newproject"> <Button nomeBotao="Criar projeto"/> </Link>
            </section>

        <BoxProjects title="Nome do Projeto" budjet="5000" category="Desenvolvimento"/>
           
        </article>
    ) 

}