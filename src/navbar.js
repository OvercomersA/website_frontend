import './css/navbar.css'

const menueBtnToggle = ()=>{
    const menueLinks = document.getElementById('resMenue')
    menueLinks.classList.toggle('activeMenue')
}

const Navbar = ()=> {

    return(
        <div className="nav">
            <nav className="menueItems">
                <div className="logo">OVERCOMERS</div>
                <div className="menueLinks" id="resMenue">
                    <ul className = 'menue'>

                        <li className="listItem"><a href="#">Sermon</a></li>
                        <li className="listItem subLinkParent">
                            <a href="#">Departments</a>

                            <ul className="subLink">
                                <li className="listItem"><a href="#">IT Department</a></li>
                                <li className="listItem"><a href="#">Ushering Department</a></li>
                                <li className="listItem"><a href="#">Evangelism Team</a></li>
                                <li className="listItem"><a href="#">God's Vineyard</a></li>
                                <li className="listItem"><a href="#">Delivarnce team</a></li>
                                <li className="listItem"><a href="#">Children Department</a></li>
                                <li className="listItem"><a href="#">God's Armour</a></li>
                                <li className="listItem"><a href="#">Nehemiah's Squad</a></li>
                                <li className="listItem"><a href="#">Drama Team</a></li>
                                <li className="listItem"><a href="#">Men's Fellowship</a></li>
                                <li className="listItem"><a href="#">Women's Fellowship</a></li>
                                <li className="listItem"><a href="#">Youth fellowship</a></li>
                            </ul>
                            
                        </li>
                        <li className="listItem"><a href="#">Contact</a></li>
                        <li className="listItem subLinkParent">
                            <a href="#">About</a>

                            <ul className="subLink">
                                <li className="listItem"><a href="#">What we stand for</a></li>
                                <li className="listItem"><a href="#">Our mission and vision</a></li>
                                <li className="listItem"><a href="#">Our history</a></li>
                            </ul>
                        </li>
                        <li className="listItem"><a href="#" className="btn">Members Corner</a></li>
                        
                    </ul>
                </div>
                {/* hamburger button */}
                <div className="toggleBtn hide" id='menueBtn' onClick={menueBtnToggle}>
                    <div className="harmburger"></div>
                    <div className="harmburger"></div>
                <div className="harmburger"></div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar