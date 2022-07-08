import './NewProject.css'
import Button from '../../../extraComponents/Buttons'
export default function NewProject(){
    return(
        <article className="NewProject">
            <section>
                <h1>Criar projeto</h1>
                <p>Crie seus projetos para depois adicionar os serviços</p>

                <form action="">
                    <label htmlFor="">Nome do projeto:</label>
                        <input type="text" />
                    
                    <label htmlFor="">Orçamento do projeto:</label>
                        <input type="number" name="" />
                    
                    <label htmlFor="">Selecione a categoría:</label>
                        <select name="" id="">
                            <option disabled>Selecione uma opção</option>
                            <option value="">Primeira</option>
                            <option value="">Segunda</option>
                        </select>

                        <Button />
                    

                </form>
            </section>
            
                
        
        </article>
    )
}