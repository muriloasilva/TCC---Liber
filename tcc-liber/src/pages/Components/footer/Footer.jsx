import React from 'react';
import { CenterText, Footer, ItemAbout, ItemPara } from './Style';


export function Foter(){
    return(
            <Footer>
                <CenterText>
                    <ItemAbout ><b>Todos os direitos reservados</b></ItemAbout>
  
                    <ItemPara>Política de Privacidade</ItemPara>
                </CenterText>

            </Footer>
    )
}