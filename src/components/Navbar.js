import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SideBarData} from './SideBarData'
import './Navbar.css'
import { IconContext} from 'react-icons'
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = ()=> setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>

            <div className="navbar">
                <Link to="#" className="menu-bars" >
                <FaBars onClick={showSideBar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className="nav-menu-item" onClick={showSideBar}>
                        <li className="navbar-toggle">
                                <Link to="#" className="menu-bars" >
                                    <AiOutlineClose />
                                </Link>
                        </li>
                        {SideBarData.map((item,index) => {
                            return(
                                <li className={item.cName} key={index}>
                                    <Link to={item.path} >
                                        {item.icon}
                            <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </nav>
            </IconContext.Provider>

        </>
    )
}

export default Navbar
