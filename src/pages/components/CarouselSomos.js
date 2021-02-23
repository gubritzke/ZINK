import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '../../../node_modules/@brainhubeu/react-carousel/lib/style.css';

import { api } from '../../api/app';

import DeposObj1 from '../../assets/img/index/carousel/obj1.svg';
import DeposObj2 from '../../assets/img/index/carousel/obj2.svg';
import DeposObj3 from '../../assets/img/index/carousel/obj3.svg';
import DeposImage from '../../assets/img/index/carousel/image1.svg';
import { BrowserView, MobileView } from 'react-device-detect';



export default function CarouselSomos(){

    const [depoimentos, setDepoimentos] = useState([]);

    useEffect(() => {
        
        async function getDepoimentos(){       
            let list = await api.get('depoimentos?');
            setDepoimentos(list.data);
        }
        getDepoimentos();
        
    });


    return(
        <div id="carousel-depos">
        <div className="row no-gutters">
            <div className="col-12">
                <div className="title">
                    <div className="content">
                        <a className="obj-1"><img src={DeposObj1} /></a>
                        <a className="obj-2"><img src={DeposObj2} /></a>
                        <p>
                            Somos verdadeiros, sabemos que uma relação <br />
                            de confiança é construída no dia a dia.
                        </p>
                        <a className="obj-3"><img src={DeposObj1} /></a>
                        <a className="obj-4"><img src={DeposObj2} /></a>
                        <a className="obj-5"><img src={DeposObj3} /></a>
                    </div>
                </div>
            </div>
        </div>
        <BrowserView>
            <div className="row">
                <div className="carousel">
                    <Carousel slidesPerPage={3} arrows infinite centered>
                        { depoimentos.map((row, key) => 
                            <div className="box">
                                <div className="row no-gutters">
                                    <div className="col-4 image">
                                        <img src={row.thumbnail} />
                                    </div>
                                    <div className="col-8">
                                        <p className="name">{row.nome}</p>
                                        <p className="empresa cl-white">{row.empresa}</p>
                                        <p className="description">{row.descricao}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </Carousel>
                </div>
            </div>
        </BrowserView>

        <MobileView>
            <div className="row">
                <div className="carousel">
                    <Carousel slidesPerPage={1} infinite arrows centered>
                        { depoimentos.map((row, key) => 
                            <div className="box">
                                <div className="row no-gutters">
                                    <div className="col-4 image">
                                        <img src={row.thumbnail} />
                                    </div>
                                    <div className="col-8">
                                        <p className="name">{row.nome}</p>
                                        <p className="empresa cl-white">{row.empresa}</p>
                                        <p className="description">{row.descricao}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </Carousel>
                </div>
            </div>
        </MobileView>

    </div>
    );
}