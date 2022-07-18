import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './Projects.css'
import Button from '../../../extraComponents/Buttons'
import BoxProjects from './boxesProjects/boxProjects'

export default function Projects(){

    const [apiData, setapiData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/projetos', {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
                        // console.log("A parte da API deu certo ")
                        // console.log(data)
                        setapiData(data)
                    })
        .catch(error => console.error("Deu um erro por causa disso aqui: " + error))
    },[])


    return(
        <article className='allProjects'>
            <section className='headerallProjects'>
                <h1>Meus Projetos:</h1>
                <Link to="/newproject"> <Button nomeBotao="Criar projeto"/> </Link>
            </section>
                {apiData.length > 0 && apiData.map((dados)=>   
                    <BoxProjects 
                        title={dados.PName} 
                        budget={dados.PBudget} 
                        textBudget="Orçamento"
                        category={dados.PCategory}                        
                        id={dados.id}
                        key={dados.PName}
                    /> 
                )}
                 
                   
        </article>
    ) 

}