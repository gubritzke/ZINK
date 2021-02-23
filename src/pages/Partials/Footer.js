import React, { useState } from 'react';

import { FiArrowRight, FiLoader } from 'react-icons/fi'
import { FaWhatsapp, FaPhoneVolume, FaEnvelope, FaInstagram, FaYoutube, FaLinkedin, FaTruckLoading } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { api } from '../../api/app'
import swal from 'sweetalert';


import { Modal } from '../components/Modal';
import LogoFooter from '../../assets/img/footer/logo.svg'
import { BrowserView, MobileView } from 'react-device-detect';

export default function Footer(){

    const [modalActive, setModalActive] = useState(false);

    const [modalActive2, setModalActive2] = useState(false);

    const [newsletterLoad, setNewsletterLoad] = useState(false)
    const [newsletter,  setNewsletter] = useState('')

    const [formulario1, setFormulario1] = useState({
        titulo: '',
        texto: '',
    })

    async function handleSendNewsletter(event){

        event.preventDefault()
        
        if ( newsletterLoad == false ){

            setNewsletterLoad(true)

            var response =  await api.post('/newsletter',{email:newsletter})

            if  ( response.data.error == true){
                alert( response.data.message )
            }  else {
                swal("Enviado com sucesso!");
            }

            setTimeout(function(){
                setNewsletterLoad(false)
            })

        }

        console.log( response )

    }

    function editForm1(e)
    {
        var meusdados = formulario1
        meusdados[e.target.name] = e.target.value
        setFormulario1({...meusdados})
    }



    return(
        <footer>
            <div id="footer1">
                <div className="content">
                    <BrowserView>
                        <div className="row">
                            <div className="col-md-12 col-lg-4 news-box">
                                <img src={LogoFooter} />
                                <h2>Assine a Newsletter</h2>
                                <p className="news-text">Receba nossas novidades e fique sempre por dentro do que estamos fazendo por você e seus clientes. </p>
                                <form onSubmit={handleSendNewsletter} className="row no-gutters" method="post">
                                <label className="col-10">
                                        <input type="text" name="newslatter" placeholder="Coloque seu e-mail" value={newsletter} onChange={(e) => setNewsletter(e.target.value)} />
                                    </label>
                                    <label className="col-2">
                                    <button> {newsletterLoad === true ? <FiLoader /> : <FiArrowRight />} </button>
                                    </label>
                                    <label className="lb-checkbox">
                                        <input type="checkbox" name="termos" />
                                        Eu li e concordo com os <a className="cl-black">termos de uso</a>.
                                    </label>
                                </form>
                            </div>
                            <div className="col-md-12 col-lg-8 no-gutters">
                                <div className="row no-gutters">
                                    <div className="col-4">
                                        <ul>
                                            <li className="title">Nossos Produtos</li>
                                            <li><Link to="/zoug">Zoug</Link></li>
                                            <li><Link to="/builder">Zink Builder</Link></li>
                                            <li><Link to="/sms">Zink SMS</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li className="title">Ajuda</li>
                                            <li><Link to="/ajuda">Para Clientes</Link></li>
                                            <li><Link to="/ajuda">Para Desenvolvedores</Link></li>
                                            <li><Link to="/ajuda">Tutoriais</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li className="title">Sobre a Zink</li>
                                            <li><Link to="/sobre">Nosso Manifesto</Link></li>
                                            <li><Link to="/sobre">Depoimentos</Link></li>
                                            <li><Link to="/sobre">Carreira</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row second-line no-gutters">
                                    <div className="col-4">
                                        <ul>
                                            <li className="title">Informações</li>
                                            <li><Link onClick={(e) => setModalActive(true)}>Política de Privacidade</Link></li>
                                            <li><Link onClick={(e) => setModalActive2(true)}>Política de Cookies</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li className="title">Acompanhe nosso Blog</li>
                                            <li><Link>Últimas postagens</Link></li>
                                            <li><Link>Destaques Principais</Link></li>
                                            <li><Link>Categorias</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li className="title">Canais de Atendimento</li>
                                            <li><Link><FaWhatsapp className="icons" />(11) 98765 4321</Link></li>
                                            <li><Link><FaPhoneVolume className="icons" />(11) 4321 5678</Link></li>
                                            <li><Link><FaEnvelope className="icons" />Contato@zinknetwork.com.br</Link></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                    <div className="row">
                            <div className="col-md-12 col-lg-4 news-box">
                                <img src={LogoFooter} />
                                <h2>Assine a Newsletter</h2>
                                <p className="news-text">Receba nossas novidades e fique sempre por dentro do que estamos fazendo por você e seus clientes. </p>
                                <form onSubmit={handleSendNewsletter} className="row no-gutters" method="post">
                                <label className="col-10">
                                        <input type="text" name="newslatter" placeholder="Coloque seu e-mail" value={newsletter} onChange={(e) => setNewsletter(e.target.value)} />
                                    </label>
                                    <label className="col-2">
                                    <button> {newsletterLoad === true ? <FiLoader /> : <FiArrowRight />} </button>
                                    </label>
                                    <label className="lb-checkbox">
                                        <input type="checkbox" name="termos" />
                                        Eu li e concordo com os <a className="cl-black">termos de uso</a>.
                                    </label>
                                </form>
                            </div>
                            <div className="col-md-12 col-lg-8 no-gutters">
                                <div className="row no-gutters">
                                    <div className="col-6">
                                        <ul>
                                            <li className="title">Nossos Produtos</li>
                                            <li><Link to="/zoug">Zoug</Link></li>
                                            <li><Link to="/builder">Zink Builder</Link></li>
                                            <li><Link to="/sms">Zink SMS</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li className="title">Ajuda</li>
                                            <li><Link to="/ajuda">Para Clientes</Link></li>
                                            <li><Link to="/ajuda">Para Desenvolvedores</Link></li>
                                            <li><Link to="/ajuda">Tutoriais</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="row second-line no-gutters">
                                    <div className="col-6">
                                        <ul>
                                            <li className="title">Sobre a Zink</li>
                                            <li><Link to="/sobre">Nosso Manifesto</Link></li>
                                            <li><Link to="/sobre">Depoimentos</Link></li>
                                            <li><Link to="/sobre">Carreira</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li className="title">Informações</li>
                                            <li><Link onClick={(e) => setModalActive(true)}>Política de Privacidade</Link></li>
                                            <li><Link onClick={(e) => setModalActive2(true)}>Política de Cookies</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row second-line no-gutters">
                                    <div className="col-6">
                                        <ul>
                                            <li className="title">Acompanhe nosso Blog</li>
                                            <li><Link>Últimas postagens</Link></li>
                                            <li><Link>Destaques Principais</Link></li>
                                            <li><Link>Categorias</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li className="title">Canais de Atendimento</li>
                                            <li><Link><FaWhatsapp className="icons" />(11) 98765 4321</Link></li>
                                            <li><Link><FaPhoneVolume className="icons" />(11) 4321 5678</Link></li>
                                            <li><Link><FaEnvelope className="icons" />Contato@zinknetwork.com.br</Link></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MobileView>
                    <div className="row line2">
                        <hr></hr>
                        <div className="col-md-12 col-lg-4 ">
                            <p class="title">Onde Estamos?</p>
                            <p class="sub-title">
                                Av. Francisco Matarazzo, 1752<br />
                                CJ 513 Água Branca | São Paulo - SP<br />
                                CEP 05001-200
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            
                            <BrowserView>
                                <div className="row">
                                    <div className="col-8" align="right">
                                        <p className="title">Acompanhe nosso trabalho</p>
                                        <p className="sub-title">Nos siga em nossas redes sociais e saiba tudo sobre a Zink</p>
                                    </div>

                                    <div className="col-4">
                                        <div className="row">
                                            <div className="col-4" align="center">
                                                <div className="box-rede"><FaInstagram className="icon" /></div>
                                            </div>
                                            <div className="col-4" align="center">
                                                <div className="box-rede"><FaYoutube className="icon" /></div>
                                            </div>
                                            <div className="col-4" align="center">
                                                <div className="box-rede"><FaLinkedin className="icon" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BrowserView>

                            <MobileView>
                                <div className="row no-gutters">
                                    <div className="col-md-12 col-lg-9" align="left">
                                        <p className="title">Acompanhe nosso trabalho</p>
                                        <p className="sub-title">Nos siga em nossas redes sociais e saiba tudo sobre a Zink</p>
                                    </div>
                                    
                                    <div className="col-md-12 col-lg-3">
                                        <div className="row">
                                            <div className="col-4" align="center">
                                                <div className="box-rede"><FaInstagram className="icon" /></div>
                                            </div>
                                            <div className="col-4" align="center">
                                                <div className="box-rede"><FaYoutube className="icon" /></div>
                                            </div>
                                            <div className="col-4" align="center">
                                                <div className="box-rede"><FaLinkedin className="icon" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MobileView>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer2">
                <div className="content">
                    <div className="row">
                        <div className="col-6" align="left">
                            @2020 Zink | Todos os direitos reservados
                        </div>
                        <div className="col-6" align="right">
                            Produzido por <a href="javascript:;"><b>Somo Collab</b></a>
                        </div>
                    </div>
                </div>
            </div>

            
            <Modal modalActive={modalActive}>
            <div className="row form">
                    <div className="col-12">
                        <button onClick={(e) => setModalActive(false)} className="close">X</button>
                        <div className="topoform">
                            <p className="cl-orange">Política de Privacidade Zink </p>
                        </div>
                        <p cl-gray>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo non nunc gravida pretium. Etiam ultrices dui mi, vehicula ornare lectus ornare id. Etiam id varius dolor, ac gravida tellus. Fusce tempor justo gravida sem molestie rutrum. Nullam tempus eleifend fermentum. Sed quis ornare dolor. Quisque id condimentum risus. Suspendisse mollis nibh pulvinar massa dapibus dapibus. Aenean blandit ullamcorper mauris feugiat laoreet.
                        </p>
                    </div>
                </div>
            </Modal>

            <Modal modalActive={modalActive2}>
            <div className="row form">
                    <div className="col-12">
                        <button onClick={(e) => setModalActive2(false)} className="close">X</button>
                        <div className="topoform">
                            <p className="cl-orange">Política de Cookies Zink </p>
                        </div>
                        <p cl-gray>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo non nunc gravida pretium. Etiam ultrices dui mi, vehicula ornare lectus ornare id. Etiam id varius dolor, ac gravida tellus. Fusce tempor justo gravida sem molestie rutrum. Nullam tempus eleifend fermentum. Sed quis ornare dolor. Quisque id condimentum risus. Suspendisse mollis nibh pulvinar massa dapibus dapibus. Aenean blandit ullamcorper mauris feugiat laoreet.
                        </p>
                    </div>
                </div>
            </Modal>
        </footer>
    );
}
