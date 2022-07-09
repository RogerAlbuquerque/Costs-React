import {useState} from 'react'
import './NewProject.css'
import Button from '../../../extraComponents/Buttons'





export default function NewProject(){

    function cadUser (e) {
        e.preventDefault()
        let Pdata = {
                Pname:e.target.projectName.value,
                Pbudget:e.target.projectBudget.value,
                Pcategory:e.target.projectCategory.value
        }
        
       setFormData(prevState => [...prevState, Pdata])
    }

       
  
        const [formData, setFormData] = useState([])
    return(
        <article className="NewProject">
            <section>
                <h1>Criar projeto</h1>
                <p>Crie seus projetos para depois adicionar os serviços</p>

                <form onSubmit={cadUser}>

                    <label htmlFor="projectName">Nome do projeto:</label>
                    <input type="text" id='projectName' placeholder='Digite o nome do projeto' />
                
                    <label htmlFor="projectBudget">Orçamento do projeto:</label>
                    <input type="number" id='projectBudget'  placeholder='Digite o orçamento total' />
                
                    <label htmlFor="projectCategory">Selecione a categoría:</label>
                    <select name="" id="projectCategory">
                        <option value=''>Selecione uma opção</option>
                        <option value="primeira">Primeira</option>
                        <option value="segunda">Segunda</option>
                    </select>
                           
                    <Button />                               

                </form>
               
            </section>
            
                
        
        </article>
    )
}