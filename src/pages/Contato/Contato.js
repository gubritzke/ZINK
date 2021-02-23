import React from 'react';
import { Link } from 'react-router-dom';

import Image1 from '../../assets/img/contato/image1.svg';
import Image2 from '../../assets/img/contato/image2.svg';
import Instagram from '../../assets/img/contato/instagram.svg';
import Linkedin from '../../assets/img/contato/linkedin.svg';
import Message from '../../assets/img/contato/message.svg';
import Tel from '../../assets/img/contato/tel.svg';
import Whats from '../../assets/img/contato/whats.svg';
import Youtube from '../../assets/img/contato/youtube.svg';

import { FiChevronRight, FiArrowRight } from 'react-icons/fi'
import { BrowserView, MobileView } from 'react-device-detect';

export default function Contato(){
    return(
        <section id="contato">
            <div id="banner">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <p className="cl-white banner-title">
                                Fale com a gente
                            </p>                        
                        </div>
                    </div>
                </div>
            </div>

            <div id="newsletter">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="news-box">
                                <h2>Assine a Newsletter</h2>
                                <p className="news-text">Receba nossas novidades e fique sempre por dentro do que estamos fazendo por você e seus clientes. </p>
                                <form className="row no-gutters" method="post">
                                    <label className="col-10">
                                        <input type="text" name="newslatter" placeholder="Coloque seu e-mail" />
                                    </label>
                                    <label className="col-2">
                                        <button><FiArrowRight /></button>
                                    </label>
                                    <label className="lb-checkbox">
                                        <input type="checkbox" name="termos" />
                                        Eu li e concordo com os <a className="cl-black">termos de uso</a>.
                                    </label>
                                </form>
                                <BrowserView>
                                    <img src={Image1} alt="imagem newsletter" />
                                </BrowserView>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="canais">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <h2>Canais de relacionamento</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-12">
                            <ul>
                                <li>
                                    <img src={Whats} />
                                    (11) 98765 4321
                                </li>
                                <li>
                                    <img src={Tel} />
                                    (11) 4321 5678
                                </li>
                                <li>
                                    <img src={Message} />
                                    contato@zinknetwork.com.br
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-12">
                            <ul>
                                <li>
                                    <img src={Linkedin} />
                                    <Link>br.linkedin.com/zinknetwork</Link>
                                </li>
                                <li>
                                    <img src={Instagram} />
                                    <Link> instagram/zinknetwork</Link>
                                </li>
                                <li>
                                    <img src={Youtube} />
                                    <Link> youtube/zinknetwork</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div id="parceiro">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="cl-green">Seja um Parceiro Zink</h2>
                        </div>
                        <div className="col-12">
                            <div className="box">
                                <p className="text-1">
                                    Gostaria de oferecer esta solução aos seus clientes de forma 100% personalizada com a sua marca, seu atendimento diferenciado e cobrar com os valores que acreditar fazer sentido para o seu mercado?
                                </p>
                                <p className="text-2">
                                    Entre em contato conosco e descubra como se tornar um Parceiro Zink para ser um Reseller Builder. 
                                </p>
                                <Link className="bt cl-orange">Whatsapp</Link>
                                <Link className="bt cl-orange">Enviar e-mail</Link>
                                <img src={Image2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}