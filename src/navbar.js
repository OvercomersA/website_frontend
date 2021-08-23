import './css/navbar.css'

const menueBtnToggle = ()=>{
    const menueLinks = document.getElementById('resMenue')
    menueLinks.classList.toggle('activeMenue')
}

const Navbar = ()=> {

    return(
        <div className="nav">
            <nav className="menueItems">
                <div className="logo"><a href="/">OVERCOMERS</a></div>
                <div className="menueLinks" id="resMenue">
                    <ul className = 'menue'>

                        <li className="listItem"><a href="/blog">Blog</a></li>
                        <li className="listItem subLinkParent">
                            <a href="/departments">Departments</a>

                            <ul className="subLink">
                                <li className="listItem"><a href="/departments#itDepartment">IT Department</a></li>
                                <li className="listItem"><a href="/departments#usheringDepartment">Ushering Department</a></li>
                                <li className="listItem"><a href="/departments#evangelismTeam">Evangelism Team</a></li>
                                <li className="listItem"><a href="/departments#godsVineyard">God's Vineyard</a></li>
                                <li className="listItem"><a href="/departments#deliveranceTeam">Delivarnce team</a></li>
                                <li className="listItem"><a href="/departments#childrenDepartment">Children Department</a></li>
                                <li className="listItem"><a href="/departments#godArmour">God's Armour</a></li>
                                <li className="listItem"><a href="/departments#nehemiahSquad">Nehemiah's Squad</a></li>
                                <li className="listItem"><a href="/departments#dramaTeam">Drama Team</a></li>
                                <li className="listItem"><a href="/departments#menFellowship">Men's Fellowship</a></li>
                                <li className="listItem"><a href="/departments#womenFellowship">Women's Fellowship</a></li>
                                <li className="listItem"><a href="/departments#youthFellowship">Youth fellowship</a></li>
                            </ul>
                            
                        </li>
                        <li className="listItem"><a href="/#contact">Contact</a></li>
                        <li className="listItem subLinkParent">
                            <a href="/aboutus">About</a>

                            <ul className="subLink">
                                <li className="listItem"><a href="/aboutus#what-we-stand-for">What we stand for</a></li>
                                <li className="listItem"><a href="/aboutus#our-mission">Our mission and vision</a></li>
                                <li className="listItem"><a href="/aboutus#our-history">Our history</a></li>
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