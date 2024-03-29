import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import BoxServices from './boxesServices/boxServices'
import "./Services.css"
import Form from '../../../extraComponents/Forms/forms'
import Button from '../../../extraComponents/Buttons'




export default function Services(){

    //----------------  HOOKS ---------------

    const { id } = useParams();
    const [dataService, setdataService] = useState ([])
    const [buttonService, setbuttonService] = useState("Adicionar serviço")
    const [editProj, setEditProj] = useState("Editar projeto")
    const [serviceForm, setServiceForm] = useState ()
    const [editForm, setEditForm] = useState ()

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

    function addService(){
        let form = document.forms[1].style
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

    function buttonEditForm(){
        let form = document.forms[0].style
        let dataProject = document.getElementById('projectData')
        // let button = 
            if(form.display != "flex"){
                form.display = "flex"
                setEditProj("Sair")
                dataProject.style.display = "none"
            }
            else if (form.display == "flex"){
                form.display = "none"
                setEditProj("Editar projeto")
                dataProject.style.display = "flex"
            }
    }
    

    function removeService (data){
        console.log(data)

        let serviceToDelete = dataService.services.find(obj => obj.SName == data.SName)
        let serviceIndex = dataService.services.indexOf(serviceToDelete)

        serviceIndex > -1 && dataService.services.splice(serviceIndex,1)
        console.log(dataService.services)
        
          fetch(`http://localhost:5000/projetos/${id}`,{
             method: "PATCH",                	
             body: JSON.stringify(dataService),			
             headers:{
                 "content-type": "application/json; charset=UTF-8" 
             },
            
         })             
         .then(res => res.json())
         .then((r=> {
             alert("Serviço removido")
             location.reload()       
         }))
         .catch(error=> console.log("Deu erro em algum lugar --" + error))

        
    }
    

    function cadService (x){
        x.preventDefault(x)

        if((dataService.cost < dataService.PBudget) || (dataService.cost + parseFloat(serviceForm.SBudget)) < dataService.PBudget ){
            dataService.cost += parseFloat(serviceForm.SBudget)
        } 
        else {
            alert("O VALOR ULTRAPASSOU O ORÇAMENTO DELIMITADO")
        }

        dataService.services.push(serviceForm)
        
         fetch(`http://localhost:5000/projetos/${id}`,{
            method: "PATCH",                	
            body: JSON.stringify(dataService),			
            headers:{
                "content-type": "application/json; charset=UTF-8" 
            },
            
        })             
        .then(res => res.json())
        .then((r=> {
            alert("Serviço salvo com sucesso")
            location.reload()           

            
        }))
        .catch(error=> console.log("Deu erro em algum lugar --" + error))

        
    }

    function updateProjectData(x){
        x.preventDefault(x)        

         fetch(`http://localhost:5000/projetos/${id}`,{
            method: "PATCH",                	
            body: JSON.stringify(editForm),			
            headers:{
                "content-type": "application/json; charset=UTF-8" 
            },
            
        })             
        .then(res => res.json())
        .then((r=> {
            alert("PROJETO ATUALIZADO") 
            location.reload()        

            
        }))
        .catch(error=> console.log("Deu erro em algum lugar --" + error))

        

        console.log(editForm)
    }
       

    function handleEditForm(x){
        setEditForm({ ...editForm, [x.target.id]: x.target.value}) 
    }

    function handleFormServices(x){
        setServiceForm({ ...serviceForm, [x.target.id]: x.target.value}) 
    }



    


    return(
    
        <article className="services">
             {/*########### PARTE DO PROJETO CASO A API ESTEJA FUNCIONANDO ################ */}
            <section className="headerServices">
                <h1>{dataService.PName}</h1>
                <Button nomeBotao={editProj} handleFunc={buttonEditForm}/>
            </section>


            {/* <section className="headerServices">
                <h1>Titulo do projeto</h1>
                <Button nomeBotao={editProj} handleFunc={buttonEditForm}/>
            </section> */}

            
            
            <section className='EditForm'>
                <Form 
                    handleFormFunc={handleEditForm} 
                    submitFunc={updateProjectData} 
                    PHtext={dataService.PName}
                    PHnumber={dataService.PBudget}
                    buttonName="Concluir edição"
                />
            </section>




            <article className="handleServiceArea">
                {/*########### PARTE DO PROJETO CASO A API ESTEJA FUNCIONANDO ################ */}
                <section id='projectData'>
                    <p><strong>Categoria</strong>: {dataService.PCategory}</p>
                    <p><strong>Total do orçamento</strong>:{dataService.PBudget}</p>
                    <p><strong>Total utilizado</strong>: R${dataService.cost}</p>
                </section>  

                {/* ########### EXEMPLOS SEM A API ################  */}
                {/* <section id='projectData'>
                <p><strong>Categoria</strong>:Infraestrutura</p>
                <p><strong>Total do orçamento</strong>:20000</p>
                <p><strong>Total utilizado</strong>: R$200</p> 
                </section>   */}

                

                <section className="addServices">
                   <div className="addServiceHeader">
                        <h1>Adicione um serviço:</h1>
                        <Button nomeBotao={buttonService} handleFunc={addService}/>                        
                   </div>


                    <form onSubmit={cadService}> 

                        <label htmlFor="SName">Nome do serviço:</label>
                        <input
                            type="text" 
                            id='SName' 
                            placeholder='Digite o nome do projeto'
                            onChange={(e)=>handleFormServices(e)}
                            required
                        />
                    
                        <label htmlFor="PBudget">Custo do serviço:</label>
                        <input 
                            type="number" 
                            id='SBudget'  
                            placeholder='Digite o orçamento total' 
                            onChange={(e)=>handleFormServices(e)}
                            required
                        />
                    
                        <label htmlFor="SCategory">Descrição do projeto:</label>
                        <input 
                            type="text" 
                            name="SDescricao" 
                            id="SDescricao" 
                            placeholder="Descreva o serviço"
                            onChange={(e)=>handleFormServices(e)}
                            
                        />
                    
                            
                        <Button nomeBotao="Adicionar serviço"/>                               

                    </form>
                </section>

                

                <section>
                   
                    <div className='titulo'> 
                        <h1>Serviços:</h1>
                    </div>                 
               
                    <div className="listServices"> 
                        <h1></h1>
     {/*########### PARTE DO PROJETO CASO A API ESTEJA FUNCIONANDO ################ */}
                        {dataService.services && dataService.services.map((dados)=>                   
                            <BoxServices
                                title={dados.SName}
                                budget={dados.SBudget} 
                                textBudget="Valor total"
                                descricao = {dados.SDescricao}
                                delServiceFunc={() => removeService(dados)}
                                key={dados.SName}
                            />
                        )}

                            
                            {/* ########### EXEMPLOS SEM A API ################  */}
                            {/* <BoxProjects 
                                title="Titulo do Serviço"
                                budget="R$ 200"
                                textBudget="Valor total"
                                descricao = "Parte que descreve qual o serviço e o que fazer"
                                key="key"
                            />

                            <BoxProjects 
                                title="Titulo do Serviço"
                                budget="R$ 200"
                                textBudget="Valor total"
                                descricao = "Parte que descreve qual o serviço e o que fazer"
                                key="key"
                            /> */}

                    </div>
                </section>
            </article>
           
        </article>
    )
}