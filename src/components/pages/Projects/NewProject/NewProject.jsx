import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Form from '../../../extraComponents/Forms/forms'
import Button from '../../../extraComponents/Buttons'
import './NewProject.css'




export default function NewProject(){

    const navigate = useNavigate()

    function cadUser(x){
        x.preventDefault()

        newProject.cost = 0
        newProject.services = []

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
       
    const [newProject, setnewProject] = useState()

    return(
        <article className="NewProject">
            <section>
                <h1>Criar projeto</h1>
                <p>Crie seus projetos para depois adicionar os serviços</p>

                
        

               <Form 
                handleFormFunc={handleForm} 
                submitFunc={cadUser} 
                PHtext="Digite o nome do projeto"
                PHnumber={"Digite o orçamento total"}
                buttonName="Criar Projeto"
               />

            </section>
            
                
        
        </article>
    )
}