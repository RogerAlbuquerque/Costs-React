import "./Services.css"
import Button from '../../../extraComponents/Buttons'
export default function Services(){
    return(
        <article className="services">
            <section className="headerServices">
                <h1>Nome do Projeto</h1>
                <Button nomeBotao="Editar projeto"/>
            </section>
            <article className="handleServiceArea">
                
                <section>
                    <p><strong>Categoria</strong>: Nome da categoria</p>
                    <p><strong>Total do orçamento</strong>: R$4000</p>
                    <p><strong>Total utilizado</strong>: R$4000</p>
                </section>

                

                <section className="addService">
                    <h1>Adicione um serviço:</h1>
                    <button>Adicionar Serviço</button>
                </section>

                

                <section>
                    <h1>Serviços:</h1>
                    <p>Não há serviços cadastrados</p>
                </section>


            </article>
        </article>
    )
}