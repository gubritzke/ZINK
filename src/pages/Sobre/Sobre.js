import React from 'react';
import { Link } from 'react-router-dom';

import CarouselSomos from '../components/CarouselSomos';

import { FiChevronRight } from 'react-icons/fi'

import { Modal } from '../components/Modal';

import { api } from '../../api/app'

import Image1 from '../../assets/img/sobre/image1.svg';
import Image2 from '../../assets/img/sobre/image2.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { isMobile, BrowserView } from 'react-device-detect';

export default function Sobre(){

    const [modalActive, setModalActive] = useState(false);

    const [modalActive2, setModalActive2] = useState(false);

    

    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        
        async function getVagas(){       
            let list = await api.get('vagas?');
            setVagas(list.data);
        }
        getVagas();
        
    });

    return(
        <section id="sobre">
            <div id="banner">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <p className="cl-white banner-title">
                                Somos verdadeiros, sabemos  <br />
                                que uma relação de confiança  <br />
                                é construída no dia a dia.
                            </p>                        
                        </div>
                    </div>
                </div>
            </div>

            <div id="sobre-zink">
                <div className="content">
                    <div className="row">
                        <div className="col-7 d-image">
                            <img src={Image1} alt="Equipe Zink" />
                        </div>
                        <div className="col-md-12 col-lg-5 d-text">
                            <h1>Sobre a Zink</h1>
                            <p>A Zink Network é uma empresa brasileira, criada com o propósito de transformar as jornadas de empresas e clientes em uma experiência digital integrada com relevância e resultados.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="razoes">
                <div className="content">
                    <div class="row no-gutters">
                        <div className="col-12">
                            <h2>Razões para estarmos juntos</h2>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>

            <div id="manifesto">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="cl-gray">Manifesto</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <p>
                                    Antes de sermos uma empresa, <b>somos pessoas.</b> <br />
                                    <b>Somos preocupados</b> com a rentabilidade do seu negócio. <br />
                                    <b>Somos verdadeiros,</b> sabemos que uma relação de confiança é construída no dia a dia. <br />
                                    <b>Somos ousados,</b> oferecendo qualidade dos grandes com um preço acessível a todos. <br />
                                    <b>Somos simples</b> porque a inovação que transforma não precisa ser complicada. <br />
                                    <b>Somos de exatas com engenharia de computação,</b> mas também de humanas, entendendo seus desafios. <br />
                                    <b>Somos revolucionários</b> porque quem faz a mesma coisa o tempo todo, não inova. <br />
                                    <b>Somos parceiros,</b> temos aquele fator #tamojunto. <br />
                                    Somos exatamente assim,
                                </p>
                                <Link>Somos a Zink.</Link>
                                <img src={Image2} alt="imagem de pessoas" />
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
            
            <CarouselSomos></CarouselSomos>

            <div id="carreira">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="cl-gray">Carreira Zink</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <table>
                                <thead>
                                    <tr>
                                        <th width="20%">Vaga</th>
                                        <th width="50%">Descrição</th>
                                        <th width="15%" className="align-center">Contratação</th>
                                        <th width="15%" align="center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                { vagas.map((row, key) => 
                                    <tr>
                                        <td>{row.titulo}</td>
                                        <td class="cl-gray">{row.descricao}</td>
                                        <td align="center">{row.contratacao}</td>
                                        <td align="center"><Link to={row.link} className="bt cl-white bg-green">Candidate-se</Link></td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12" align="center">
                            <Link className="vermais bt cl-orange bd-orange">Ver mais</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="nossas-politicas">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="cl-gray">Nossas políticas</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <Link onClick={(e) => setModalActive(true)} className="bt cl-black">Política de Privacidade<FiChevronRight className="icon cl-green" /></Link>
                        <Link onClick={(e) => setModalActive2(true)} className="bt cl-black">Política de Cookies<FiChevronRight className="icon cl-green" /></Link>
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

        </section>
    );
}