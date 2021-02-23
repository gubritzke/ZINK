import React from 'react';
import { Link } from 'react-router-dom';

import Desenvolvedores from '../components/Desenvolvedores';
import { useEffect } from 'react';
import { useState } from 'react';

import { api } from '../../../api/app'
import IconDownlaod from '../../../assets/img/ajuda/download-icon.svg'

export default function AjudaDesenvolvedoresBuilder(){

    const [desenvolvedoresDoc, setDesenvolvedoresDoc] = useState([]);

    const [desenvolvedoresRel, setDesenvolvedoresRel] = useState([]);

    useEffect(() => {
        
        async function getDesenvolvedoresDoc(){       
            let list = await api.get('/desenvolvedores?produto=builder&tipo=documentacao');
            setDesenvolvedoresDoc(list.data);
        }
        getDesenvolvedoresDoc();

        async function getDesenvolvedoresRel(){       
            let list = await api.get('/desenvolvedores?produto=builder&tipo=releases');
            setDesenvolvedoresRel(list.data);
        }
        getDesenvolvedoresRel();
        
    });

    return(
        <section id="ajuda">
            
            <Desenvolvedores 
                name="Builder"
                logo="LogoBuilder"
                texto="As soluções criadas pela Zink são orientadas a uma consulta de APIs aberta, flexível e criada nativamente em microsserviços na nuvem. Todo este espaço foi criado para você poder conectar todas as suas fontes de dados, projetar novas soluções utilizando as nossas e gerar valores incomensuráveis para o seu negócio ou o de seus clientes. Se tiver alguma dúvida ou sugestão, entre em contato e conte com a gente."
            />

            <div id="desenvolvedores">
                <div id="conteudo">
                    <div className="content">
                        <div className="row no-gutters box-documents">
                            <div className="col-12 line-title">
                                <h3 className="cl-gray">Documentação de Integração</h3>
                            </div>
                            <div className="col-12 documents">
                                { desenvolvedoresDoc.map((row, key) => 
                                    <Link to={row.arquivo} className="bt cl-black">{row.titulo}  <img src={IconDownlaod} className="icon" /></Link>
                                )}
                            </div>
                        </div>
                        <div className="row no-gutters box-documents">
                            <div className="col-12 line-title">
                                <h3 className="cl-gray">Releases</h3>
                            </div>
                            <div className="col-12 documents">
                                { desenvolvedoresRel.map((row, key) => 
                                    <Link to={row.arquivo} className="bt cl-black">{row.titulo}  <img src={IconDownlaod} className="icon" /></Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}