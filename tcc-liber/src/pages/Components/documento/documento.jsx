import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Delimitar, FaixaPdf } from '../bookContent/style';
import { Button } from '../buttons/buttons';
import { Inputs } from '../inputs/inputs';
import { Ajuste, AjusteB } from './style';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export function Documento(pdf){
    const [numPages, setNumPages] = useState(1);
    const [page, setPage] = useState(1)
    const [tipoPage, setTipoPage] = useState(true)
    
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
  
    const PagAnterior = () => {
        if (page == 1){
            setPage(page)
        }else{
            setPage(page - 1)
        }
        
    }
    const PagPosterior = () =>{
        if (page == numPages){
            setPage(page)
        }else{
            setPage(page + 1)
        }
    }

    const MudaTipo = () =>{
        if (tipoPage == true){
            setTipoPage(false)
        }else{
            setTipoPage(true)
        }
    }

    if(tipoPage == true){
        return(
            <>
            <FaixaPdf>
                    <Delimitar>
                        <Inputs type='checkbox' onChange={MudaTipo} />
                        <h2>Leitura por páginas</h2>
                    </Delimitar>
                       
                </FaixaPdf>
            <Ajuste id="ResumeContainer">


                <Document 
                    className={"PDFDocument"}
                    file={pdf.pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >

                    {Array.from(new Array(numPages), (el, index) => (
                        <Page className={"PDFPage PDFPageOne"} renderTextLayer={false} renderInteractiveForms={false} key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </Ajuste>
            </>
        )
    }else{ 
        return(
            <>
            <FaixaPdf>
                    <Delimitar>
                        <Inputs type='checkbox' onChange={MudaTipo} />
                        <h2>Leitura por páginas</h2>
                    </Delimitar>
                       
                </FaixaPdf>
            <Ajuste id="ResumeContainer">
                <AjusteB>
                    <Button onClick={() => PagAnterior()} texto='Voltar'/>
                </AjusteB>
                <Document 
                    className={"PDFDocument"}
                    file={pdf.pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page scale={1.0} className={"PDFPage PDFPageOne"} renderTextLayer={false} renderInteractiveForms={false} pageNumber={page} /> 
                </Document>
                <AjusteB>
                    <Button onClick={() => PagPosterior()} texto='Passar'/>
                </AjusteB>
            </Ajuste>
            </>
        )
    }
}
                