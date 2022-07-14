import Button from '../Buttons'

export default function forms({submitFunc, handleFormFunc, buttonName, PHtext, PHnumber }){
    return(

        <form onSubmit={submitFunc}>

            <label htmlFor="PName">Nome do projeto:</label>
            <input
                type="text" 
                id='PName' 
                placeholder={PHtext} 
                onChange={(e)=>handleFormFunc(e)}
                required
            />
        
            <label htmlFor="PBudget">Orçamento do projeto:</label>
            <input 
                type="number" 
                id='PBudget'  
                placeholder={PHnumber} 
                onChange={(e)=>handleFormFunc(e)}
                required
            />
        
             <label htmlFor="PCategory">Selecione a categoría:</label>
            <select id="PCategory" onChange={(e) => handleFormFunc(e)} required >
                <option value="">                   Selecione uma opção </option>
                <option value="infra">              Infra               </option>
                <option value="desenvolvimento">    Desenvolvimento     </option>
                <option value="designe">            Designe             </option>
                <option value="planejamento">       planejamento        </option>
            </select>
                    
            <Button nomeBotao={buttonName}/>                               

        </form>
    )
}