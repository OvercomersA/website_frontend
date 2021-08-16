import './css/header.css'

const Header = ()=>{
    return(
        <div className="header">
            <div className="headText">
                <h1 className='headTitle'>
                    We live for Jesus alone
                </h1>
                <p className="headContent">
                    For God so loved the world that he gave his only begotten son, that whoever belives in him will not be dystroyed but they will have life abudantly
                </p>
                <a className="headBtn" href='#'>Visit Us</a>
            </div>
            <div className="headImage">
                <img src="./images/model.jpg" alt="woman smiling" />
            </div>
        </div>
    )
}

export default Header