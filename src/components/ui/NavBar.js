import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        const action = {
            type: types.logout,
          }
    
          dispatch(action);
    
        navigate('/login', {
            replace: true
          })
    }

    const context = useContext(AuthContext);

    const username = context.user.name



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ( {isActive} ) => 'nav-item nav-link ' + (isActive ? 'active' : '')} 
                        to="/Marvel%20Comics"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/DC%20Comics"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span   className='nav-item nav-link text-info'>
                        {username}
                    </span>

                    <button
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

 