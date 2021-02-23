import React from 'react';
import { Link } from 'react-router-dom';


import CarouselSomos from '../../pages/components/CarouselSomos';

import InfoButton from '../../assets/img/index/banner/icon-info.svg';

import { FiChevronRight } from 'react-icons/fi';

import LogoZoug from '../../assets/img/index/zoug/logo.svg';
import ZougImage1 from '../../assets/img/index/zoug/image1.svg';
import ZougImage2 from '../../assets/img/index/zoug/image2.svg';
import ZougIcon1 from '../../assets/img/index/zoug/mega-fone.svg';
import ZougIcon2 from '../../assets/img/index/zoug/relogio.svg';
import ZougIcon3 from '../../assets/img/index/zoug/relatorios.svg';
import ZougIcon4 from '../../assets/img/index/zoug/grafico.svg';

import LogoBuilder from '../../assets/img/index/builder/logo.svg';
import BuilderImage1 from '../../assets/img/index/builder/image1.svg';
import BuilderImage2 from '../../assets/img/index/builder/image2.svg';
import BuilderIcon1 from '../../assets/img/index/builder/icon1.svg';
import BuilderIcon2 from '../../assets/img/index/builder/icon2.svg';
import BuilderIcon3 from '../../assets/img/index/builder/icon3.svg';
import BuilderIcon4 from '../../assets/img/index/builder/icon4.svg';

import LogoSms from '../../assets/img/index/sms/logo.svg';
import SmsImage1 from '../../assets/img/index/sms/image1.svg';
import SmsImage2 from '../../assets/img/index/sms/image2.svg';
import SmsIcon1 from '../../assets/img/index/sms/icon1.svg';
import SmsIcon2 from '../../assets/img/index/sms/icon2.svg';
import SmsIcon3 from '../../assets/img/index/sms/icon3.svg';
import SmsIcon4 from '../../assets/img/index/sms/icon4.svg';

import VmsConvImage from '../../assets/img/index/vamos-conversar/image1.svg';
import { BrowserView, MobileView, isBrowser } from 'react-device-detect';

export default function Index(){
    return(
        <section id="index">
            <div id="banner">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <p className="cl-white banner-title">
                                Inicie um novo jeito <br />
                                de se comunicar com <br />
                                os seus clientes
                            </p>                        
                            <p className="cl-white sub-title">conheça nossas soluções</p>
                            <Link className="bt cl-white ">Contrate agora</Link>

                            <a className="info-hover">
                                <img src={InfoButton} alt="botão de informação" />
                                <span>
                                    Você sabia?<br />
                                    Mensagens SMS são abertas por 98% dos usuários e 90% são lidas em até 3 minutos.
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="zoug">
                <div className="content">
                    <div className="row">
                        <BrowserView>
                            <div className="col-6 images">
                                <img className="zoug-image1" src={ZougImage1} alt="fundo" />
                                <img className="zoug-image2" src={ZougImage2} alt="Personagem com megafone"/>
                            </div>
                        </BrowserView>
                        <div className="col-md-12 col-lg-6">
                            <img className="logo" src={LogoZoug} alt="logo zoug" />
                            <BrowserView>
                                <h2>Tenha <br />
                                credibilidade</h2>
                            </BrowserView>
                            <MobileView>
                                <h2>Tenha credibilidade</h2>
                            </MobileView>

                            <p>Com o Zoug suas campanhas de envios de SMS em massa terão a efetividade que seus clientes exigem e merecem.</p>
                            <div className="row icons">
                                <div className="col-3">
                                    <img src={ZougIcon1} alt="icone" />
                                    <span className="leg-icon">Cadastro de campanhas</span>
                                </div>
                                <div className="col-3">
                                    <img src={ZougIcon2} alt="icone"  />
                                    <span className="leg-icon">Controle de hora de envio</span>
                                </div>
                                <div className="col-3">
                                    <img src={ZougIcon3} alt="icone"  />
                                    <span className="leg-icon">Relatórios completos</span>
                                </div>
                                <div className="col-3">
                                    <img src={ZougIcon4} alt="icone"  />
                                    <span className="leg-icon">Capacidade Ilimitada</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 bt-mb-center">
                                    <Link to="/zoug" className="bt cl-black">
                                    Saiba mais sobre o Zoug <FiChevronRight className="icon" /> 
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="builder">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <img className="logo" src={LogoBuilder} alt="logo builder" />
                            <h2>Crie experiências</h2>
                            <p>Com o Zink Builder você tem o poder da automação e aceleração de campanhas digitais, com um exclusivo construtor de landing pages para comunicação e interatividade mobile. Tudo com a facilidade do recurso "arrasta e solta"  e configurações tão simples como um passo-a-passo.</p>
                            <div className="row icons">
                                <div className="col-3">
                                    <img src={BuilderIcon1} alt="icone"  />
                                    <span className="leg-icon">Templates personalizados</span>
                                </div>
                                <div className="col-3">
                                    <img src={BuilderIcon2} alt="icone"  />
                                    <span className="leg-icon">Mensagens com variáveis</span>
                                </div>
                                <div className="col-3">
                                    <img src={BuilderIcon3} alt="icone"  />
                                    <span className="leg-icon">Relatórios completos</span>
                                </div>
                                <div className="col-3">
                                    <img src={BuilderIcon4} alt="icone"  />
                                    <span className="leg-icon">CTA’s Telefone, WhatsApp etc</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 bt-mb-center">
                                    <Link to="/builder" className="bt cl-black">
                                    Saiba mais sobre o Builder <FiChevronRight className="icon" /> 
                                    </Link>
                                </div>
                            </div> 
                        </div>
                        <div className="col-6 images">
                            <BrowserView>
                                <img className="builder-image1" src={BuilderImage1} alt="celular"  />
                                <img className="builder-image2" src={BuilderImage2} alt="imagem de fundo" />
                            </BrowserView>
                        </div>
                    </div>
                </div>
            </div>

            <div id="sms">
                <div className="content">
                    <div className="row">
                        <BrowserView>
                            <div className="col-6 images">
                                <img className="sms-image1" src={SmsImage1} />
                                <img className="sms-image2" src={SmsImage2} />
                                <img className="sms-image3" src={SmsImage2} />
                            </div>
                        </BrowserView>
                        <div className="col-md-12 col-lg-6">
                            <img className="logo" src={LogoZoug} />
                            <h2>Profissionalize sua comunicação</h2>
                            <p>Com o Zink SMS você consegue a atenção com mais de 90% do seu público de envio com agilidade, economia e total segurança.</p>
                            <div className="row icons">
                                <div className="col-3">
                                    <img src={SmsIcon1} />
                                    <span className="leg-icon">SMS é mais eficiente</span>
                                </div>
                                <div className="col-3">
                                    <img src={SmsIcon2} />
                                    <span className="leg-icon">Mensagens personalizadas</span>
                                </div>
                                <div className="col-3">
                                    <img src={SmsIcon3} />
                                    <span className="leg-icon">Relatórios completos</span>
                                </div>
                                <div className="col-3">
                                    <img src={SmsIcon4} />
                                    <span className="leg-icon">Tenha melhores resultados</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 bt-mb-center">
                                    <Link to="/sms" className="bt cl-black">
                                    Saiba mais sobre o Zink SMS <FiChevronRight className="icon" /> 
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <CarouselSomos></CarouselSomos>
            
            <BrowserView>
                <div id="vamos-conversar">
                    <div className="content">
                        <div className="row">
                            <a className="image1">
                                <img src={VmsConvImage} />
                            </a>
                            <div className="col-12">
                                <p className="title">Vamos conversar?</p>
                                <p className="subtitle">Fale com nossos consultores</p>
                                <span>
                                    Revolucione o seu negócio agora mesmo. Nossos consultores de negócios 
                                    <br />Zink estão aguardando por você neste momento!
                                    </span>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6" align="right">
                                        <Link className="bt cl-white">Em breve{/* WhatsApp */}</Link>
                                    </div>

                                    <div className="col-6" align="left">
                                        <Link className="bt cl-white">Em breve{/* Enviar e-mail */}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>

            <MobileView>
                <div id="vamos-conversar">
                    <div className="row no-gutters">
                        <a className="image1">
                            <img src={VmsConvImage} />
                        </a>
                        <div className="col-12">
                            <p className="title">Vamos conversar?</p>
                            <p className="subtitle">Fale com nossos consultores</p>
                            <span>
                                Revolucione o seu negócio agora mesmo. Nossos consultores de negócios 
                                <br />Zink estão aguardando por você neste momento!
                                </span>
                        </div>
                        <div className="col-12">
                            <div className="row no-gutters">
                                <div className="col-6" align="right">
                                    <Link className="bt cl-white">Em breve{/* WhatsApp */}</Link>
                                </div>

                                <div className="col-6" align="left">
                                    <Link className="bt cl-white">Em breve{/* Enviar e-mail */}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MobileView>

        </section>
    );
}
