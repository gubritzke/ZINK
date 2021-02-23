import React from 'react';
import { Link } from 'react-router-dom';

export default function Destaues(){
    return(
        <div id="destaque">
            <div className="content">
                <div className="row">
                    <div className="col-4">
                        <div className="text">
                            <span>Categoria max 40 caracteres</span>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Máximo 78 caracteres</p>
                            <Link className="cl-orange bt">Conferir</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text">
                            <span>Categoria max 40 caracteres</span>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Máximo 78 caracteres</p>
                            <Link className="cl-orange bt">Conferir</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text">
                            <span>Categoria max 40 caracteres</span>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Máximo 78 caracteres</p>
                            <Link className="cl-orange bt">Conferir</Link>
                        </div>
                    </div>

                </div>
            </div> 
        </div>
    );
}