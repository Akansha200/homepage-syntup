import React from 'react' ;
const Header = () =>{
    return(
        <div>
            <nav className="navbar">
               
                <ul className="head">
                    <li className="pq" >
                        <a className="nav" href="#">Home</a>
                    </li>
                    <li className="pq">
                        <a className="nav" href="#">Cart</a>
                    </li>
                    <li className="pq">
                        <a className="nav" href="#">Register</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;