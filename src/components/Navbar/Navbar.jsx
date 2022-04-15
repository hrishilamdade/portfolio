import React,{useState} from 'react'
import './Navbar.scss';
import {HiMenuAlt4,HiX} from 'react-icons/hi';   //importing icons
import {motion} from 'framer-motion';   
const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const navLinks = ["home","about","work","skills","contact"];
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <h1>Hrishi<span>kesh</span></h1>
            </div>
            <ul className='app__navbar-links'>
                {
                    navLinks.map(item=> <li className='app__flex p-text' key={`link-${item}`}>
                            <div/>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )
                }
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={()=> setToggle(true)}/>
                {toggle && (
                    <motion.div 
                        whileInView={{x:[300,0]}}
                        transition={{duration:0.85,ease:'easeOut'}}
                        className='app__navbar-menu-items'
                    >
                        <HiX onClick={()=>setToggle(false)}/>
                        <ul>
                        {
                            navLinks.map(item=> <li className='app__flex p-text' key={item}>
                                    <a onClick={()=>setToggle(false) } href={`#${item}`}>{item}</a>
                                </li>
                            )
                        }
                        </ul>
                    </motion.div >
                ) }
            </div>
        </nav>
    )
}

export default Navbar