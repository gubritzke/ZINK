import React from 'react';
import { Link } from 'react-router-dom';

import LogoBuilder from '../../../assets/img/ajuda/logo-Builder.svg'
import LogoZoug from '../../../assets/img/ajuda/logo-Zoug.svg'
import LogoSms from '../../../assets/img/ajuda/logo-Sms.svg'
import Message from '../../../assets/img/contato/message.svg'
import Tel from '../../../assets/img/contato/tel.svg'
import Whats from '../../../assets/img/contato/whats.svg'

import Image1 from '../../../assets/img/ajuda/clientes-image.svg'
import { BrowserView } from 'react-device-detect';

export default function Desenvolvedores({name, logo, texto}){
    return(
        <section id="clientes">
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
                                <h1>Para Clientes</h1>
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
                            <div className="col-6" align="center">
                                <img src={Image1} />
                            </div>
                        </BrowserView>
                    </div>
                </div>
            </div>

        </section>
    );
}