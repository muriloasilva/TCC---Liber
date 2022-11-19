import React from 'react';
import { Navbar, ProfileContainer, Image, Title, Link, Links } from './Style.jsx';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import { getToken } from '../../../services/auth.jsx';

// Navbar com o nome App por causa do styled-components que dava dando erro por causa do mesmo nome
export function App() {

    if(getToken()){
        return (
                <Navbar>
                    <ProfileContainer>
                        <a href='/'>
                            <Image src={Logo} />
                        </a>
                        <Title>
                            <a href='/'>LIBER</a>
                        </Title> 
                    </ProfileContainer>
                    <Links>
                        <Link>
                            <a href='/' className='link'>Home</a>
                        </Link>
                        <Link>
                            <a href='/Post/Create' className='link'>Postar</a>
                        </Link>
                        
                        <Link>
                            <a href='/Sobre' className='link'>Sobre</a>
                        </Link>
                        <Link>
                            <a href={`/Perfil/${getToken().userID}`} className='link'>{getToken().nome}</a>
                        </Link>
                    </Links>
                </Navbar>

        );
    }else{
        return (
            <Navbar>
                <ProfileContainer>
                        <a href='/'>
                            <Image src={Logo} />
                        </a>
                        <Title>
                            <a href='/'>LIBER</a>
                        </Title> 
                </ProfileContainer>
                <Links>
                    <Link>
                        <a href='/' className='link'>HOME</a>
                    </Link>
                    <Link>
                        <a href='/Sobre' className='link'>SOBRE</a>
                    </Link>
                    <Link>
                        <a href='/Login' className='link'>LOGIN</a>
                    </Link>
                    <Link>
                        <a href='/Cadastro' className='link'>CADASTRO</a>
                    </Link>
                </Links>
            </Navbar>

        );
    }
}
