import {Link} from 'react-router-dom'
import {FaRegTrashAlt } from "react-icons/fa";
import './boxesServices.css'

export default function boxServices({title, budget,textBudget, category, descricao, delServiceFunc}){

    return (
            <section className="projects" >
                <div>  
                    <h1>{title}</h1>
                    <p><strong>{textBudget}</strong>: R$:{budget}</p>
                    <p><span className={`bolinhaProjeto ${category}`}></span>{category} {descricao}</p>
                    
                </div>
                <div className='divButtons'>
                    <button onClick={delServiceFunc}>
                        <FaRegTrashAlt />Excluir
                    </button>
                </div>


             
            </section>
    )
}