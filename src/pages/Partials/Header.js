import React, { useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { slide as Menu } from 'react-burger-menu'

import Logo from '../../assets/img/header/logo.svg';
import LogoZoug from '../../assets/img/header/logozoug.svg';
import LogoBuilder from '../../assets/img/header/logobuilder.svg';
import LogoSms from '../../assets/img/header/logosms.svg';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

export default function Header(){

    return(
        <header>
            <div id="header">
                <div className="content">
                    <BrowserView>
                        <div className="row">
                            <div className="col-3">
                                <Link to="/"><img src={Logo} /></Link>
                            </div>
                            <div className="col-6" align="center">
                                <ul>
                                    <li><Link to="/sobre" className="cl-white">Sobre</Link></li>
                                    <li className="sub">
                                        <Link className="cl-white" >Produtos <FiChevronDown /></Link>
                                        <div className="submenu">
                                            <div className="row">
                                                <div className="col-4">
                                                    <Link to="/zoug">
                                                        <img src={LogoZoug} />
                                                        <p>Campanhas de envios de SMS em massa </p>
                                                    </Link>
                                                </div>
                                                <div className="col-4 borders">
                                                    <Link to="/builder">
                                                        <img src={LogoBuilder} />
                                                        <p>Automação e aceleração de campanhas digitais</p>
                                                    </Link>
                                                </div>
                                                <div className="col-4">
                                                    <Link to="/sms">
                                                        <img src={LogoSms} />
                                                        <p>Envio de SMS com agilidade, economia e total segurança</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to="/ajuda" className="cl-white" >Ajuda</Link></li>
                                    {/* <li><Link to="/blog" className="cl-white" >Blog</Link></li> */}
                                    <li><Link to="/contato" className="cl-white">Contato</Link></li>
                                </ul>
                            </div>
                            <div className="col-3" align="right">
                                <Link to="javascript:;" className="cl-white bg-orange bt">Contrate Agora</Link>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div className="row">
                            <div className="col-3">
                                <Link to="/"><img src={Logo} /></Link>
                            </div>
                        </div>
                    </MobileView>
                </div>
                <MobileView>
                    <Menu right width={ '80%' }  >
                        <a href="/" className="cl-white">Home</a>
                        <a href="/sobre" className="cl-white">Sobre</a>
                        <a href="/zoug" className="cl-white">Zoug</a>
                        <a href="/builder" className="cl-white">Builder</a>
                        <a href="/sms" className="cl-white">Sms</a>
                        <a href="/ajuda" className="cl-white" >Ajuda</a>
                        <a href="/contato" className="cl-white">Contato</a>
                    </Menu>
                </MobileView>
            </div>
        </header>
    );
}
