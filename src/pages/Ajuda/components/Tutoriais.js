import React from 'react';
import { Link } from 'react-router-dom';

import LogoBuilder from '../../../assets/img/ajuda/logo-Builder.svg'
import LogoZoug from '../../../assets/img/ajuda/logo-Zoug.svg'
import LogoSms from '../../../assets/img/ajuda/logo-Sms.svg'

import IconDownlaod from '../../../assets/img/ajuda/download-icon.svg'

import Image1 from '../../../assets/img/ajuda/tut-image.svg'
import { BrowserView } from 'react-device-detect';

export default function Desenvolvedores({name, logo, texto}){
    return(
        <section id="tutoriais">
            <div id="banner">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <p className="cl-white banner-title">
                                Ajuda com {name}
                            </p>                        
                        </div>
                    </div>
                </div>
            </div>

            <div id="line-banner">
                <div class="content">
                    <div class="row">
                        <div className="col-12">
                            <div className="box">
                                <h1>Tutoriais</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="topo">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <a className={"logo " + logo}></a>
                            <h2>Para você</h2>
                            <p>{texto}</p>
                        </div>
                        <BrowserView>
                            <div className="col-6">
                                <img src={Image1} />
                            </div>
                        </BrowserView>
                    </div>
                </div>
            </div>

        </section>
    );
}