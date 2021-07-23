import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Header() {
    const[pathName,setPathName]=useState("");

    const location=useLocation();
    const history = useHistory();

    useEffect( () =>{
         setPathName(location.pathname)
    },[location.pathname])

    const rediretTo = (pathName) => {
                 setPathName(pathName);
                 history.push(pathName);
    }
    
    return (
        <header className="header">
            <nav className="nav-bar">
                <p className={`nav-item ${pathName === "/" ?"selected" : ""}`} onClick={ () => rediretTo("/")}>Movies </p>
                <p className={`nav-item ${pathName === "/series" ?"selected" : ""}`} onClick={ () => rediretTo("/series")}>Series</p>
                <p className={`nav-item ${pathName === "/anime" ?"selected" : ""}`} onClick={ () => rediretTo("/anime")}>Anime</p>


            </nav>
            
        </header>
    )
}

export default Header;
