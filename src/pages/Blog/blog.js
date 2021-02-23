import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Noticia from './components/noticia';
import Destaque from './components/destaques';

export default function Sobre(){

    const [noticia, setNoticia] = useState([]);

    useEffect(() => {

        getNoticia()

    }, [])

    async function getNoticia(){

        //axios no backend que tem que receber esses dados abaixo:
        var respostaBackend = [
            {
                titulo: 'Categoria do post',
                subtitulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tristique odio. Curabitur nec imperdiet tortor, ut gravida dui. ',
                image: '/static/media/image-notice.5d099814.svg',
                link: '/'
            },
            {
                titulo: 'Categoria do post',
                subtitulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tristique odio. Curabitur nec imperdiet tortor, ut gravida dui. ',
                image: '/static/media/image-notice.5d099814.svg',
                link: '/'
            },
            {
                titulo: 'Categoria do post',
                subtitulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tristique odio. Curabitur nec imperdiet tortor, ut gravida dui. ',
                image: '/static/media/image-notice.5d099814.svg',
                link: '/'
            },
            {
                titulo: 'Categoria do post',
                subtitulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tristique odio. Curabitur nec imperdiet tortor, ut gravida dui. ',
                image: '/static/media/image-notice.5d099814.svg',
                link: '/'
            }
        ]

        setNoticia( respostaBackend )

    }


    return(
        <section id="blog">
            <div id="banner">
                <div className="bg-color">
                    <div className="content">
                        <div className="row">
                            <div className="col-12">
                                <span className="banner-category cl-white">Categoria do post</span>
                                <p className="cl-white banner-title">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tristique odio. Curabitur nec. Máximo 134 caracteres
                                </p>   
                                <Link className="bt cl-white bt-banner">Conferir</Link>                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Noticia 
                destaque="destaque"
                titulo="Categoria do post"
                subtitulo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tristique odio. Curabitur nec imperdiet tortor, ut gravida dui. "
                link="/"
                image="/static/media/image-notice.5d099814.svg"
            />

            <div id="search">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <label className="slct">
                                    <select name="ultimas">
                                        <option value="">Últimas postagens</option>
                                        <option value="">Últimas postagens</option>
                                    </select>
                                </label>
                                <label className="slct">
                                    <select name="categoria">
                                        <option value="">Categoria</option>
                                        <option value="">Últimas postagens</option>
                                    </select>
                                </label>
                                <label className="ipt">
                                    <input type="text" name="de" value="17/08/2019"/>
                                </label>
                                <label className="ipt">
                                    <input type="text" name="ate" value="17/08/2019"/>
                                </label>
                                

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            { noticia.map((row, key) => 
                <Noticia 
                    titulo={row.titulo}
                    subtitulo={row.subtitulo}
                    link={row.link}
                    image={row.image}
                />
            )}
        
            <div id="vermais">
                <div className="content">
                    <div className="row">
                        <div className="col-12" align="center">
                            <Link className="vermais bt cl-gray bd-gray">Ver mais</Link>
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