import React from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import LogoZoug from '../../assets/img/ajuda/logo-Zoug.svg';
import LogoBuilder from '../../assets/img/ajuda/logo-Builder.svg';
import LogoSms from '../../assets/img/ajuda/logo-Sms.svg';
import Image1 from '../../assets/img/ajuda/image1.svg';
import Image2 from '../../assets/img/ajuda/image2.svg';


export default function Ajuda(){
    return(
        <section id="ajuda">
            <div id="banner">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <p className="cl-white banner-title">
                                Precisa de ajuda?
                            </p>                        
                        </div>
                    </div>
                </div>
            </div>

            <div id="produtos">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <Link className="box">
                                <img src={LogoZoug} alt="Logo Zoug" />
                            </Link>
                            <Link to="/ajuda/ajuda-desenvolvedores-zoug" className="bt cl-black">Para Desenvolvedores<FiChevronRight className="icon cl-orange" /></Link>
                            <Link to="/ajuda/ajuda-clientes-zoug" className="bt cl-black">Para Clientes<FiChevronRight className="icon cl-orange" /></Link>
                            <Link to="/ajuda/ajuda-tutoriais-zoug" className="bt cl-black">Tutoriais Zoug<FiChevronRight className="icon cl-orange" /></Link>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-margin">
                            <Link className="box">
                                <img src={LogoBuilder} alt="Logo Builder" />
                            </Link>
                            <Link to="/ajuda/ajuda-desenvolvedores-builder" className="bt cl-black">Para Desenvolvedores<FiChevronRight className="icon cl-orange" /></Link>
                            <Link to="/ajuda/ajuda-clientes-builder" className="bt cl-black">Para Clientes<FiChevronRight className="icon cl-orange" /></Link>
                            <Link to="/ajuda/ajuda-tutoriais-builder" className="bt cl-black">Tutoriais Builder<FiChevronRight className="icon cl-orange" /></Link>
                        </div>
                        <div className="col-md-12 col-lg-4 mb-margin">
                            <Link className="box">
                                <img src={LogoSms} alt="Logo Sms" />
                            </Link>
                            <Link to="/ajuda/ajuda-desenvolvedores-sms" className="bt cl-black">Para Desenvolvedores<FiChevronRight className="icon cl-orange" /></Link>
                            <Link to="/ajuda/ajuda-clientes-sms" className="bt cl-black">Para Clientes<FiChevronRight className="icon cl-orange" /></Link>
                            <Link to="/ajuda/ajuda-tutoriais-sms" className="bt cl-black">Tutoriais Zink SMS<FiChevronRight className="icon cl-orange" /></Link>
                        </div>

                    </div>
                </div>
            </div>

            <div id="contato">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <img className="image1" src={Image1} alt="folha" />
                                <img className="image2" src={Image2} alt="Mulher sentada" />
                                <p className="cl-white">Se preferir, entre em contato com a gente!</p>
                                <Link className="bt cl-white">Clique aqui</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}