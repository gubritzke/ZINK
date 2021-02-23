import React from 'react';
import { Link } from 'react-router-dom';

import ImageNotice from '../../../assets/img/blog/image-notice.svg';


export default function Noticia({ titulo, subtitulo, image, link, destaque }){

    return(
        <div id="noticia" className={destaque}>
            <div className="content">
                <div className="row no-gutters">
                    <div className="col-8 ">
                        <div className="text">
                            <span>{titulo}</span>
                            <p>{subtitulo}</p>
                            <Link to={link} className="cl-orange bt">Conferir</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="image">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}