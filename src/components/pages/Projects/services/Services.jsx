import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import "./Services.css"
import Button from '../../../extraComponents/Buttons'
export default function Services(){




    const { id } = useParams();
    const [dataService, setdataService] = useState ([])
    const [buttonService, setbuttonService] = useState("Adicionar serviço")

    useEffect(()=>{
        fetch(`http://localhost:5000/projetos/${id}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
                        setdataService(data)
                    })
        .catch(error => console.error("Deu um erro por causa disso aqui: " + error))
    },[])

    function editProj(){
        let form = document.forms[0].style
        // let button = 
            if(form.display != "flex"){
                form.display = "flex"
                setbuttonService("Sair")
            }
            else if (form.display == "flex"){
                form.display = "none"
                setbuttonService("Adicionar Serviço")
            }
    }


    return(
    
        <article className="services">
            <section className="headerServices">
                <h1>{dataService.PName}</h1>
                <Button nomeBotao="Editar projeto"/>
            </section>

            <article className="handleServiceArea">
                
                <section>
                    <p><strong>Categoria</strong>: {dataService.PCategory}</p>
                    <p><strong>Total do orçamento</strong>:{dataService.PBudget}</p>
                    <p><strong>Total utilizado</strong>: R$0</p>
                </section>

                

                <section className="addServices">
                   <div className="addServiceHeader">
                        <h1>Adicione um serviço:</h1>
                        <Button nomeBotao={buttonService} handleFunc={editProj}/>
                        
                   </div>

                    <form /*onSubmit={cadUser}*/ > 

                        <label htmlFor="PName">Nome do serviço:</label>
                        <input
                            type="text" 
                            id='PName' 
                            placeholder='Digite o nome do projeto' 
                            required
                        />
                    
                        <label htmlFor="PBudget">Custo do serviço:</label>
                        <input 
                            type="number" 
                            id='PBudget'  
                            placeholder='Digite o orçamento total' 
                            required
                        />
                    
                        <label htmlFor="PCategory">Descrição do projeto:</label>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Descreva o serviço"
                        />
                    
                            
                        <Button nomeBotao="Adicionar serviço"/>                               

                    </form>
                </section>

                

                <section className="listServices">
                    <h1>Serviços:</h1>
                    <p>Não há serviços cadastrados</p>
                </section>


            </article>
            
        </article>
    )
}