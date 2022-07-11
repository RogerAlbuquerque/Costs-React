import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../../../extraComponents/Buttons'
import './NewProject.css'




export default function NewProject(){

    const navigate = useNavigate()

    function cadUser(x){
        x.preventDefault()
        fetch('http://localhost:5000/projetos',{
            method: "POST",                	
            body: JSON.stringify(newProject),			
            headers:{
                "content-type": "application/json; charset=UTF-8" 
            },
            
        })             
        .then(res => res.json())
        .then((r=> {
            alert("Projeto postado com sucesso")
            navigate("/projects")

            
        }))
        .catch(error=> console.log("Deu erro em algum lugar --" + error))

        console.log(newProject)

        
    }

    function handleForm(x){

            setnewProject({ ...newProject, [x.target.id]: x.target.value}) 
    }
       

    const [formData, setFormData] = useState([])
    const [newProject, setnewProject] = useState()

    return(
        <article className="NewProject">
            <section>
                <h1>Criar projeto</h1>
                <p>Crie seus projetos para depois adicionar os serviços</p>

                <form onSubmit={cadUser}>

                    <label htmlFor="PName">Nome do projeto:</label>
                    <input
                        type="text" 
                        id='PName' 
                        placeholder='Digite o nome do projeto' 
                        onChange={(e)=>handleForm(e)}
                        required
                    />
                
                    <label htmlFor="PBudget">Orçamento do projeto:</label>
                    <input 
                        type="number" 
                        id='PBudget'  
                        placeholder='Digite o orçamento total' 
                        onChange={(e)=>handleForm(e)}
                        required
                    />
                
                    <label htmlFor="PCategory">Selecione a categoría:</label>

                    <select id="PCategory" onChange={(e) => handleForm(e)} required >
                        <option value="">                   Selecione uma opção </option>
                        <option value="infra">              Infra               </option>
                        <option value="desenvolvimento">    Desenvolvimento     </option>
                        <option value="designe">            Designe             </option>
                        <option value="planejamento">       planejamento        </option>
                    </select>
                           
                    <Button nomeBotao="Criar Projeto"/>                               

                </form>
               

            </section>
            
                
        
        </article>
    )
}