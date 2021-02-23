import React from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi'

import Image1 from '../../../assets/img/produtos/components/image1.svg'
import Image2 from '../../../assets/img/produtos/components/image2.svg'


export default function RodaProdutos({ texto, name, ajudaDev, ajudaCli, ajudaTut}){
    return(
        <div id="roda-produtos">
            <div className="content">
                <div id="roda1">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <img  className="image1" src={Image1} />
                            <p>Precisa de um plano sob medida?</p>
                            <span>Fale com nossos consultores.</span>
                            <img  className="image2" src={Image2} />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <Link className="bt cl-white">Em breve{/* WhatsApp */}</Link>
                            <Link className="bt cl-white">Em breve{/* Enviar e-mail */}</Link>
                        </div>
                    </div>
                </div>

                <div id="roda2">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <h2>Ajuda</h2>
                            <p>
                                {texto}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Link to={ajudaDev} className="bt cl-black">Para desenvolvedores<FiChevronRight className="icon cl-green" /></Link>
                            <Link to={ajudaCli} className="bt cl-black">Para Clientes<FiChevronRight className="icon cl-green" /></Link>
                            <Link to={ajudaTut} className="bt cl-black">Tutoriais {name}<FiChevronRight className="icon cl-green" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
}