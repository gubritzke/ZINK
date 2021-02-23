import React from 'react';
import { Link } from 'react-router-dom';

import Tutoriais from '../components/Tutoriais';

import IconDownlaod from '../../../assets/img/ajuda/download-icon.svg'
import { useEffect } from 'react';
import { useState } from 'react';

import { api } from '../../../api/app'

export default function AjudaTutoriaisZoug(){

    const [tutoriaisEbook, setTutoriaisEbook] = useState([]);

    const [tutoriaisVideo, setTutoriaisVideo] = useState([]);

    useEffect(() => {
        
        async function getTutoriaisEbook(){       
            let list = await api.get('/tutoriais?produto=zoug&tipo=ebook');
            setTutoriaisEbook(list.data);
        }
        getTutoriaisEbook();

        async function getTutoriaisVideo(){       
            let list = await api.get('/tutoriais?produto=zoug&tipo=video');
            setTutoriaisVideo(list.data);
        }
        getTutoriaisVideo();
        
    });

    return(
        <section id="ajuda">
            
            <Tutoriais 
                name="Zoug"
                logo="LogoZoug"
                texto="Seja expert nas soluções Zink. Apresentamos toda a base de conhecimento para que possa seguir todos os passos e extrair todo o potencial de nossos produtos."
            />
            
            <div id="tutoriais">
                <div id="conteudo">
                    <div className="content">
                        <div className="row no-gutters box-documents">
                            <div className="col-12 line-title">
                                <h3 className="cl-gray">Tutoriais | Vídeos</h3>
                            </div>

                            <div className="row flex no-gutters">
                                { tutoriaisVideo.map((row, key) => 
                                    <div className="">
                                        <iframe width="100%" height="227" src={row.iframe} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <span>{row.titulo}</span>
                                        <p>{row.descricao}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="row no-gutters box-documents">
                            <div className="col-12 line-title">
                                <h3 className="cl-gray">Tutoriais | E-book</h3>
                            </div>
                            <div className="col-12 documents">
                                { tutoriaisEbook.map((row, key) => 
                                    <Link to={row.arquivo} className="bt cl-black">{row.titulo}<img src={IconDownlaod} className="icon" /></Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}