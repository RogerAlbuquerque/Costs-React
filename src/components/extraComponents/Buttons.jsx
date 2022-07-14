import './Button.css'
export default function Button({nomeBotao, handleFunc}){
    return(
        <button className='Button' onClick={handleFunc}>{nomeBotao}</button>
    )
}