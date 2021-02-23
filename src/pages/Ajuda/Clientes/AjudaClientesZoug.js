import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import { FiLoader } from 'react-icons/fi'
import Clientes from '../components/Clientes';

import { api } from '../../../api/app'

import Message from '../../../assets/img/contato/message.svg'
import Tel from '../../../assets/img/contato/tel.svg'
import Whats from '../../../assets/img/contato/whats.svg'

export default function AjudaClientesZoug(){

    const [newsletterLoad, setNewsletterLoad] = useState(false)
    const [camposFormulario, setCamposFormularios] = useState({
        nome: '',
        email: '',
        telefone: '',
        sobre: '',
        assunto: '',
        descricao: '',
        produto: 'Zoug',
    })

    async function handleSend(event)
    {

        event.preventDefault()

        var data = camposFormulario

       

            setNewsletterLoad(true)

            var response =  await api.post('/clientes', data)

            if  ( response.data.error == true){
                alert( response.data.message )
            }  else {
                swal("Enviado com sucesso!");
            }

            setTimeout(function(){
                setNewsletterLoad(false)
            })

        

        console.log( response )

    }

    function changeInputMult(e)
    {

        var meusdados = camposFormulario
        meusdados[e.target.name] = e.target.value
        setCamposFormularios({...meusdados})

        console.log( meusdados )

    }

    return(
        <section id="ajuda">
            
            <Clientes 
                name="Zoug"
                logo="LogoZoug"
                texto="Vamos contar o nosso segredo para uma solução cada vez mais otimizada e adequada às suas necessidades: sua colaboração. Este espaço é para que você interaja conosco, tire suas dúvidas e reforce ainda mais os vínculos com a gente. Fique à vontade."
            />


            <div id="clientes">
                <div id="conteudo">
                    <div className="content">
                        <div className="row no-gutters box-documents">
                            <div className="col-12 line-title">
                                <h3 className="cl-gray">Suporte Técnico e Financeiro</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <form method="post" onSubmit={handleSend}>
                                    <label>
                                        <input type="text" value={camposFormulario.nome} onChange={(e) => changeInputMult(e)} name="nome" placeholder="Nome completo" />
                                    </label>
                                    <label>
                                        <input type="text" value={camposFormulario.email} onChange={(e) => changeInputMult(e)} name="email" placeholder="E-mail" />
                                    </label>
                                    <label>
                                        <input type="text" value={camposFormulario.telefone} onChange={(e) => changeInputMult(e)} name="telefone" placeholder="Telefone" />
                                    </label>
                                    <label>
                                        <input type="text" value={camposFormulario.sobre} onChange={(e) => changeInputMult(e)} name="sobre" placeholder="Sobre o Produto" />
                                    </label>
                                    <label>
                                        <input type="text" value={camposFormulario.assunto} onChange={(e) => changeInputMult(e)} name="assunto" placeholder="Assunto" />
                                    </label>
                                    <label>
                                        <input type="text" value={camposFormulario.descricao} onChange={(e) => changeInputMult(e)} name="descricao" placeholder="Descrição" />
                                    </label>

                                    <button type="submit" className="bt cl-white bg-green">{newsletterLoad === true ? <FiLoader /> : "Enviar"}</button>

                                </form>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <span className="tit-cont">Canais de relacionamento</span>
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
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}