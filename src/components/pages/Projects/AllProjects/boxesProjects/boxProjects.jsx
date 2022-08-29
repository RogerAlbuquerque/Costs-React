import {Link} from 'react-router-dom'
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import './boxesProjects.css'

export default function boxProjects({title, budget,textBudget, category, id,descricao}){
    
    function delProject(){
        // fetch(`http://localhost:5000/projetos/${id}`, {
        //     method:'DELETE',
        //     headers:{
        //         'Content-Type':'application/json'}
        // })
        // .then(response => alert("Projeto deletado"), location.reload())        
        // .catch(error => console.error("Deu um erro por causa disso aqui: " + error))
        alert("Projeto Deletado")
    }

   

    return (
            <section className="projects" >
                <div>  
                    <h1>{title}</h1>
                    <p><strong>{textBudget}</strong>: R$:{budget}</p>
                    <p><span className={`bolinhaProjeto ${category}`}></span>{category} {descricao}</p>
                    
                </div>
                <div className='divButtons'>
                    <Link to={`/projects/${id}`}><button><FaRegEdit     />Editar</button></Link>                    
                    <button onClick={delProject}><FaRegTrashAlt />Excluir</button>
                </div>

             
            </section>
    )
}