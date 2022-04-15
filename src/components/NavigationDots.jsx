import React from 'react'

const NavigationDots = ({active}) => {
    const navLinks = ["home","about","work","skills","contact"];

    return (
        <div className='app__navigation'>
            {
                navLinks.map((item,index)=>
                    <a 
                        href={`#${item}`} 
                        key={item+index}
                        className="app__navigation-dot" 
                        style={active === item ?{backgroundColor:'#313BAC'}:{}}
                    />
                )
            }
        </div>
    )
}

export default NavigationDots