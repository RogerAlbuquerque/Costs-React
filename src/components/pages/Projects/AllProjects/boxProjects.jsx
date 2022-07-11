import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import './Projects.css'

export default function boxProjects({title, budget, category}){
    return (
            <section className="projects" >
                <div>  
                    <h1>{title}</h1>
                    <p><strong>Orçamento</strong>: R$:{budget}</p>
                    <p><span className="bolinhaProjeto"></span>{category}</p>
                </div>
                <div className='divButtons'>
                    <button><FaRegEdit     />Editar</button>
                    <button><FaRegTrashAlt />Excluir</button>
                </div>

             
            </section>
    )
}