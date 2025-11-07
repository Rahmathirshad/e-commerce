import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const { items } =useSelector((item) => item.cart);
    const [menuIcon, setMenuIcon] = useState(false);
    return (
        <MainHeader>
            <nav className={menuIcon ? 'navbar-container' : 'navbar-container nc-mobile'}>
                <div className="logoANDmenuIcon-container">
                    <figure>
                        <NavLink to='/'>
                            <img className='logo' src={logo} alt="logo" />
                        </NavLink>
                    </figure>
                    {!menuIcon ? <AiOutlineMenu className='menu-icon' onClick={() => setMenuIcon(menuIcon ? false : true)} /> : <AiOutlineClose className='menu-icon' onClick={() => setMenuIcon(menuIcon ? false : true)} />}

                </div>
                <ul className='navbar-list'>
                    <li onClick={() => setMenuIcon(false)}><NavLink className='nav-link' to='/'>Home</NavLink></li>
                    <li onClick={() => setMenuIcon(false)}><NavLink className='nav-link' to='/products'>Products</NavLink></li>
                    <li onClick={() => setMenuIcon(false)}><NavLink className='nav-link' to='/about'>About</NavLink></li>
                    <li onClick={() => setMenuIcon(false)}><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
                </ul>
                <ul className="navbar-list-icons">
                    <li><AiOutlineUser /></li>
                    <li><AiOutlineHeart /></li>
                    <li onClick={() => setMenuIcon(false)}><NavLink className="nav-link nav-link-icon" to='/cart'><AiOutlineShoppingCart /><span>{items.length}</span></NavLink></li>
                </ul>
            </nav>
        </MainHeader>
    )
}

const MainHeader = styled.header`
position: sticky;
top: 0;
z-index: 999;

.navbar-container{
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
height: 9vh;
width: 100%;
box-shadow: ${({ theme }) => theme.colors.shadowSupport};
backdrop-filter: blur(30px);

.logoANDmenuIcon-container{
    display: flex;
    align-items: center;
}

.logo{
    padding-top: 5px ;
    height: 7vh;
}

.menu-icon{
    display: none;
}

.navbar-list{
    display: flex;
    gap: 5vw;
    li{
        font-size: 2rem;
    }
}
.navbar-list-icons{
    display: flex;
    gap: 3vw;
    li{
        font-size: 2.5rem;
    }
}
.nav-link{
    &:link,
    &:visited {
        font-size: 1.8rem;
        font-weight: 600;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.text};
        transition: color 0.2s linear;
    }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
}
.nav-link-icon{
    &:link,
    &:visited {
        font-size: 2.5rem;
    }
    span{
        font-size: 1.4rem;
        font-weight: 600;
        color: white;
        background-color: #dd6161;
        padding: 2px 6px;
        border-radius: 50%;
        position: absolute;
        right: 10px;
        top: 8px;
    }
}
}
@media screen and (max-width: 700px) {
    .navbar-container{
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        padding: 0.4rem 0;

        .logoANDmenuIcon-container{
            width: 100vw;
            padding: 0 4rem;
            justify-content: space-between;
        }
        .menu-icon{
            display: block;
            font-size: x-large;
        }

        .navbar-list{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12vh;
        }
        .navbar-list-icons{
            padding-bottom: 5rem;
            .nav-link-icon{
                span{
                    display: none;
                }
            }
        }
        
    }

    .nc-mobile{
        height: 9vh;
        .navbar-list{display: none;}
        .navbar-list-icons{display: none;}
    }
}
`;

export default Header