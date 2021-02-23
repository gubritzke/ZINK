import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Noticia from './components/noticia';
import Destaque from './components/destaques';

import img1 from '../../assets/img/blog/detalhe1.svg';
import img2 from '../../assets/img/blog/detalhe2.svg';

export default function Detalhe(){

    const [noticia, setNoticia] = useState([]);

    useEffect(() => {

        getNoticia()

    }, [])

    async function getNoticia(){

        //axios no backend que tem que receber esses dados abaixo:
        var respostaBackend = [
            {
                titulo: 'Categoria do post',
                subtitulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tristique odio. Curabitur nec imperdiet tortor, ut gravida dui.',
                paragrafo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, odio non tincidunt lacinia, sapien lectus aliquet arcu, at pharetra neque mauris lacinia diam. Vestibulum faucibus gravida risus eu convallis. Praesent mauris nibh, pharetra non posuere id, dictum scelerisque sapien. In viverra lorem ut egestas cursus. Duis accumsan velit id vulputate tempus. Ut bibendum dolor sed vehicula blandit. Curabitur quam ipsum, pellentesque vitae tincidunt quis, consectetur quis ex. Phasellus ut euismod tellus. Nulla non sem a metus dictum fringilla. Proin non elit eu tellus volutpat iaculis. Ut finibus tellus maximus vehicula pharetra. Donec suscipit mauris vitae tellus gravida scelerisque. Aliquam vel nisl eget nisl ultrices posuere. Etiam lacus turpis, vestibulum in tellus sit amet, tempor venenatis neque. Suspendisse pulvinar ac mi id laoreet. Phasellus sit amet dui mattis, viverra sapien ac, egestas est.',
                paragrafo2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, odio non tincidunt lacinia, sapien lectus aliquet arcu, at pharetra neque mauris lacinia diam. Vestibulum faucibus gravida risus eu convallis. Praesent mauris nibh, pharetra non posuere id, dictum scelerisque sapien. In viverra lorem ut egestas cursus. Duis accumsan velit id vulputate tempus. Ut bibendum dolor sed vehicula blandit. Curabitur quam ipsum, pellentesque vitae tincidunt quis, consectetur quis ex. Phasellus ut euismod tellus. Nulla non sem a metus dictum fringilla. Proin non elit eu tellus volutpat iaculis. Ut finibus tellus maximus vehicula pharetra. Donec suscipit mauris vitae tellus gravida scelerisque. Aliquam vel nisl eget nisl ultrices posuere. Etiam lacus turpis, vestibulum in tellus sit amet, tempor venenatis neque. Suspendisse pulvinar ac mi id laoreet. Phasellus sit amet dui mattis, viverra sapien ac, egestas est.',
                paragrafo3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, odio non tincidunt lacinia, sapien lectus aliquet arcu, at pharetra neque mauris lacinia diam. Vestibulum faucibus gravida risus eu convallis. Praesent mauris nibh, pharetra non posuere id, dictum scelerisque sapien. In viverra lorem ut egestas cursus. Duis accumsan velit id vulputate tempus. Ut bibendum dolor sed vehicula blandit. Curabitur quam ipsum, pellentesque vitae tincidunt quis, consectetur quis ex. Phasellus ut euismod tellus. Nulla non sem a metus dictum fringilla. Proin non elit eu tellus volutpat iaculis. Ut finibus tellus maximus vehicula pharetra. Donec suscipit mauris vitae tellus gravida scelerisque. Aliquam vel nisl eget nisl ultrices posuere. Etiam lacus turpis, vestibulum in tellus sit amet, tempor venenatis neque. Suspendisse pulvinar ac mi id laoreet. Phasellus sit amet dui mattis, viverra sapien ac, egestas est.',
                image1: ''
            }
        ]

        setNoticia( respostaBackend )

    }


    return(
        <section id="detalhe">
            { noticia.map((row, key) =>
                <div id="banner">
                    <div className="bg-color">
                        <div className="content">
                            <div className="row">
                                <div className="col-12">
                                    <span className="banner-category cl-white">{row.titulo}</span>
                                    <p className="cl-white banner-title">
                                        {row.subtitulo}
                                    </p>                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            { noticia.map((row, key) =>
                <div id="conteudo">
                    <div className="content">
                        <div className="row">
                            <div className="col-7">
                                <h2>{row.titulo}</h2>
                                <p>{row.paragrafo1}</p>
                            </div>
                            <div className="col-5">
                                <img src={img1}/>
                            </div>
                            <div className="col-12">
                                <p>{row.paragrafo2}</p>
                            </div>
                            <div className="col-12">
                            <img src={img2}/>
                            </div>
                            <div className="col-12">
                                <p>{row.paragrafo3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
           )}


            <div id="relacionados">
                <div className="content">
                    <div className="row">
                        <div className="col-12" align="left">
                            <h3 className="cl-black">Relacionados</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Destaque></Destaque>

            <div id="vermais">
                <div className="content">
                    <div className="row">
                        <div className="col-12" align="center">
                            <Link className="vermais bt cl-gray bd-gray">Ver mais</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}