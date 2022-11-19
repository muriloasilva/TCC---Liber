import React from 'react';
import { All } from '../../Style/all';
import { BookAlign } from '../Components/bookContent/style';
import { Foter } from '../Components/footer/Footer';
import murilo from '../../assets/murilo.jpg'
import leo from '../../assets/leo.jpg'
import kerolynn from '../../assets/kerolynn.jpg'
import leandro from '../../assets/leandro.jpg'
import { App } from '../Components/Navbar/Navbar';
import { ContentSobre, Criador, Criadores, FaixaSobre, FaixaSobreS, SobreContent } from './Style';

export function Sobre(){
    return(
        <All>
        <App />
        <BookAlign>       
            <SobreContent>
                <FaixaSobre>
                    <h1>Prazer, somos a liber!</h1>
                </FaixaSobre>
                <ContentSobre>
                    <p>
                        Este é um projeto de TCC, para o curso de Informática para a internet da ETEC Prof. Idio Zucchi.
                        <br></br>
                        <br></br>
                        O projeto nasceu com o intuito de ajudar autores amadores a ganharem visibilidade. Pois reconhecemos a 
                        dificuldade que há por trás da publicação de um livro, que, além de ser caro, não é algo garantido de fazer sucesso.
                        <br></br>
                        <br></br>
                        Devido à estas circunstâncias, decidimos criar um site gratuito onde você possa publicar qualquer tipo de obra, desde que seja em formato PDF!
                        <br></br>
                        <br></br>
                        Acreditamos que o PDF é um formato acessível aos autores. Afinal, existem diversas ferramentas para transformar imagens e textos
                        em PDF. Até mesmo textos com imagens é possível transformar em PDF gratuitamente.
                    </p>
                </ContentSobre>
                <FaixaSobreS>
                    <h1>Criadores:</h1>
                </FaixaSobreS>
                <Criadores>
                    <Criador>
                        <a href='https://www.instagram.com/eu_muriloasilva/' target='_blank'>
                           <img src={murilo}></img>
                            <h1>Murilo</h1> 
                            <h2>(Lider do grupo)</h2>
                        </a>
                    </Criador>

                    <Criador>
                        <a href='https://www.instagram.com/eoleotavares/' target='_blank'>
                           <img src={leo}></img>
                            <h1>Leonardo</h1> 
                            <h2>(Programador front-end)</h2>
                        </a>
                    </Criador>

                    <Criador>
                        <a href='https://www.instagram.com/kerolynn.sabatini/' target='_blank'>
                           <img src={kerolynn}></img>
                            <h1>Kerolynn</h1> 
                            <h2>(Pesquisadora)</h2>
                        </a>
                    </Criador>

                    <Criador>
                        <a href='https://www.instagram.com/nigkiru/' target='_blank'>
                           <img src={leandro}></img>
                            <h1>Leandro</h1> 
                            <h2>(Programador back-end)</h2>
                        </a>
                    </Criador>
                </Criadores>
            </SobreContent>
        </BookAlign>
        </All>
    )
}