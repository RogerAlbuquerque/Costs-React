import {Link} from 'react-router-dom'
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import './Projects.css'
import Button from '../../../extraComponents/Buttons'

export default function Projects(){

    return(
        <article className='allProjects'>
            <section className='headerallProjects'>
                <h1>Meus Projetos</h1>
                <Link to="/newproject"> <Button nomeBotao="Criar projeto"/> </Link>
            </section>

            <article className='boxProjects'>
                    <section className="projects">
                        <h1>Nome do Projeto</h1>
                        <p><strong>Orçamento</strong>: R$3000</p>
                        <p><span></span>Categoria</p>
                        <div className='divButtons'>
                            <button><FaRegEdit     />Editar</button>
                            <button><FaRegTrashAlt />Excluir</button>
                        </div>
                    </section>


                  

                
               
                
            </article>
        </article>
    ) 

}