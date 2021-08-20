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

                        <li className="listItem"><a href="/blog">Blog</a></li>
                        <li className="listItem subLinkParent">
                            <a href="/department">Departments</a>

                            <ul className="subLink">
                                <li className="listItem"><a href="/department">IT Department</a></li>
                                <li className="listItem"><a href="/department">Ushering Department</a></li>
                                <li className="listItem"><a href="/department">Evangelism Team</a></li>
                                <li className="listItem"><a href="/department">God's Vineyard</a></li>
                                <li className="listItem"><a href="/department">Delivarnce team</a></li>
                                <li className="listItem"><a href="/department">Children Department</a></li>
                                <li className="listItem"><a href="/department">God's Armour</a></li>
                                <li className="listItem"><a href="/department">Nehemiah's Squad</a></li>
                                <li className="listItem"><a href="/department">Drama Team</a></li>
                                <li className="listItem"><a href="/department">Men's Fellowship</a></li>
                                <li className="listItem"><a href="/department">Women's Fellowship</a></li>
                                <li className="listItem"><a href="/department">Youth fellowship</a></li>
                            </ul>
                            
                        </li>
                        <li className="listItem"><a href="/contact">Contact</a></li>
                        <li className="listItem subLinkParent">
                            <a href="/about">About</a>

                            <ul className="subLink">
                                <li className="listItem"><a href="/about">What we stand for</a></li>
                                <li className="listItem"><a href="/about">Our mission and vision</a></li>
                                <li className="listItem"><a href="/about">Our history</a></li>
                            </ul>
                        </li>
                        <li className="listItem"><a href="/membersLogin" className="btn">Members Corner</a></li>
                        
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