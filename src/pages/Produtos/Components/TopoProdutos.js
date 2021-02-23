import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserView } from 'react-device-detect';

export default function TopoProdutos({ name, title, subtitle, bg }){
    

    return(
        <div id="topo-produtos">
            <div className="banner-produtos">
                <div className={bg}>
                    <p className="title">{title}</p>
                    <p className="sub-title">{subtitle}</p>
                </div>
            </div>
            <BrowserView>
            <div className="menu-produtos">
                <div class="content">
                    <div class="row">
                        <div className="col-3">
                            <h1>Zink {name}</h1>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><Link className="cl-green link-bt2">{name} é para você</Link></li>
                                <li><Link className="cl-black link-bt">Recursos</Link></li>
                                <li><Link className="cl-black link-bt">Planos {name}</Link></li>
                                <li><Link className="cl-black link-bt">Ajuda</Link></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <Link className="cl-orange bt">Contrate o {name}</Link>
                        </div>
                    </div>
                </div>
            </div>
            </BrowserView>
        </div>
    );  
}