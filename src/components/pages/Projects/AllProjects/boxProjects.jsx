import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import './Projects.css'

export default function boxProjects({title, budjet, category}){
    return (
        <article className='boxProjects'>
            <section className="projects">
                <h1>{title}</h1>
                <p><strong>Orçamento</strong>: R$:{budjet}</p>
                <p><span className='bolinhaProjeto'></span>{category}</p>
                <div className='divButtons'>
                    <button><FaRegEdit     />Editar</button>
                    <button><FaRegTrashAlt />Excluir</button>
                </div>
            </section>
        </article>
    )
}