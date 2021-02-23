import React, { useState } from 'react';
import classnames from 'classnames';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import { FiCheck } from 'react-icons/fi';

import swal from 'sweetalert';
 
import TopoProdutos from './Components/TopoProdutos';
import RodaProdutos from './Components/RodaProdutos';

import LogoForm from '../../assets/img/produtos/zoug/logo-form.svg';
import Logo from '../../assets/img/produtos/zoug/logo.svg';
import Image1 from '../../assets/img/produtos/zoug/image1.svg';
import Image2 from '../../assets/img/produtos/zoug/image2.svg';
import Image3 from '../../assets/img/produtos/zoug/image3.svg';
import Image1png from '../../assets/img/produtos/zoug/image1.png'
import { FiLoader } from 'react-icons/fi'

import Icon1 from '../../assets/img/produtos/zoug/icon1.svg';
import Icon2 from '../../assets/img/produtos/zoug/icon2.svg';
import Icon3 from '../../assets/img/produtos/zoug/icon3.svg';
import Icon4 from '../../assets/img/produtos/zoug/icon4.svg';
import Icon5 from '../../assets/img/produtos/zoug/icon5.svg';
import { Link } from 'react-router-dom';
import { api } from '../../api/app';
import { Modal } from '../components/Modal';
import { useEffect } from 'react'
import { BrowserView } from 'react-device-detect';

export default function Zoug(){

    const [modalActive, setModalActive] = useState(false)
    const [tabs, setTabs] = useState('corporativo')
    
    const [planos, setPlanos] = useState([])
    const [valores, setValores] = useState([])

    const [newsletterLoad, setNewsletterLoad] = useState(false)
    const [planoSelecionado, setPlanoSelecionado] = useState({})
    const [valorSelecionado, setValorSelecionado] = useState({})

    const [camposFormulario, setCamposFormularios] = useState({
        nome: '',
        telefone: '',
        empresa: '',
        email: '',
    })

    
    useEffect(() => {
        
        getPlanos()

    }, [])

    async function getPlanos(){       

        let list = await api.get('/planos?produto=zoug')

        setPlanos(list.data)
        getValores( list.data[0] )

    }

    async function getValores(plano){       

        console.log(plano)

        let list = await api.get('/valores?plano='+plano.id)
        
        setValores(list.data)
        setPlanoSelecionado(plano)

        if ( list.data.length ) {
            setValorSelecionado(list.data[0])
        } else {
            setValorSelecionado(
                {
                    valor: 0,
                    numero: 0,
                }
            )
        }

        console.log( list )

    }

    function handleChangeValor(valor){

        setValorSelecionado( valores[(valor-1)] )

    }

    async function handleSend(event)
    {

        event.preventDefault()

        var data = camposFormulario
            data['valor_id'] = valorSelecionado.id
            data['plano_id'] = planoSelecionado.id

            setNewsletterLoad(true)

            var response =  await api.post('/pedidos', data)

            if  ( response.data.error == true){
                alert( response.data.message )
            }  else {
                setModalActive(false)
                swal("Enviado com sucesso!");
            }

            setTimeout(function(){
                setNewsletterLoad(false)
            })

        console.log( data )

    }


    function changeInputMult(e)
    {

        var meusdados = camposFormulario
        meusdados[e.target.name] = e.target.value
        setCamposFormularios({...meusdados})

        console.log( meusdados )

    }

    return(
        <section id="prod-zoug">
            <TopoProdutos
                name="Zoug"
                title="Tenha credibilidade" 
                subtitle="
                    Com o Zoug suas campanhas de envios de SMS em massa
                    terão a efetividade que seus clientes exigem e merecem.
                "
                bg="bg-orange"
            
            />

            <div id="para-voce">
                <div className="content">
                    <div class="row">
                        <div className="col-md-6 col-lg-6 box-img" align="center">
                            <img src={Logo} />
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <h2>Zoug é para você:</h2>
                            <ul>
                                <li>Provedores de SMS;</li>
                                <li>Empresas que utilizam mais de um fornecedor de SMS e desejam unificar a operação em uma única ferramenta e/ou deseja manter o mesmo fornecedor porém necessita de funcionalidades especiais e exclusivas.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row no-gutters images">
                        <div className="col-12">
                            <img className="image1" src={Image1png} />
                            <img className="image2" src={Image2} />
                        </div>
                    </div>
                </div>
            </div>

            <div id="recursos">
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <h2>Recursos</h2> 
                        </div>
                    </div>
                    <div className="row menus">

                        <div className="col-4">
                            <a
                                onClick={() => setTabs('corporativo')}
                                className={tabs === 'corporativo' && 'active'}
                            >
                                Funcionalidades (Corporativo)
                            </a>
                        </div>

                        <div className="col-4">
                            <a
                                onClick={() => setTabs('provedor_de_sms')}
                                className={tabs === 'provedor_de_sms' && 'active'}
                            >
                                Funcionalidades (Provedor de SMS)
                            </a>
                        </div>

                        <div className="col-4">
                            <a
                                onClick={() => setTabs('diferenciais')}
                                className={tabs === 'diferenciais' && 'active'}
                            >
                                Diferenciais
                            </a>
                        </div>
                        
                        <div className="col-12">
                            <hr />
                        </div>

                    </div>
                    <div className="row">
                        <div className={`col-12 menu-1 ${tabs === 'corporativo' && 'active'}`} >
                            <div className="row">
                                <div className="col-md-12 col-lg-7 ">
                                    <ul>
                                        <li>Criação de perfis de usuários;</li>
                                        <li>
                                            Cadastro de campanhas: <br />
                                            ○ Diversas opções de layouts de arquivo ou através de listas de contatos; <br />
                                            ○ Mensagens pré-cadastradas;<br /> 
                                            ○ Agendamentos em lotes; <br />
                                            ○ Seleção da rota desejada; 
                                        </li>
                                        <li>Blacklist; </li>
                                        <li>Caixa de entrada (opção de recebimento via e-mail); </li>
                                        <li>Controle de horário de envio; </li>
                                        <li>Controle de cota de envio diário; </li>
                                        <li>Integração http e smpp; </li>
                                        <li>Relatórios sintéticos e analíticos.</li>
                                    </ul>
                                </div>
                                
                                <div className="col-5">
                                    <BrowserView>
                                        <img src={Image3} />
                                    </BrowserView>
                                </div>
                                
                            </div>
                        </div>
                        <div className={`col-12 menu-2 ${tabs === 'provedor_de_sms' && 'active'}`}>
                            <div className="content">
                                <div className="row no-gutters">
                                    <div className="col-12">
                                        <h2>3 níveis de usuário</h2>
                                    </div>  
                                </div>
                                <div className="row no-gutters box-icons">
                                    <div className="col-12">
                                        <div className="icon">
                                            <img src={Icon1} />
                                            <span>Master</span>
                                        </div>
                                        <div className="icon">
                                            <img src={Icon2} />
                                            <span>Revenda</span>
                                        </div>
                                        <div className="icon">
                                            <img src={Icon3} />
                                            <span>Cliente</span>
                                        </div>
                                    </div>  
                                </div>
                                <div className="row no-gutters box-text">
                                    <div className="col-12">
                                        <div className="text bx1">
                                            <img src={Icon4} />

                                            <p>Roteamento por operadora, capacidade, vazão e outros, através da ferramenta Tools.</p>
                                        </div>
                                        <div className="text bx2">
                                            <img src={Icon5} />
                                            <p>Cadastro de conectores SMPP;</p>
                                        </div>
                                    </div>  
                                </div>
                                
                            </div>
                        </div>
                        <div className={`col-12 menu-3 ${tabs === 'diferenciais' && 'active'}`}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Facilidade de customizações para o cliente;
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Escalabilidade que torna o produto com capacidade ilimitada;
                                        </p>
                                        </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Flexibilidade para o cliente final com opções de rotas diferentes, layouts de arquivos, variedades de agendamentos de campanhas;
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Documentação simples, API prática e performática.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="planos">
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <h2>Planos Zoug</h2>
                        </div>
                    </div>

                    <div className="row no-gutters">
                        
                        <div className="col-md-12 col-lg-4">
                        
                            <div className="description">
                                <span>Você escolheu:</span>
                                <p>{planoSelecionado.numero} campanhas simultâneas</p>
                                <hr />
                                <ul dangerouslySetInnerHTML={{__html: planoSelecionado.texto}}/>
                            </div>
                            
                        </div>
                        <div className="col-md-12 col-lg-8 infos">
                            <div class="row campanhas">
                                
                                { planos.map((row, key) => 
                                <div className="col-3" key={key} onClick={() => getValores(row)}>
                                    <div className="box-campanha">
                                        <span className="num">{row.numero}</span>
                                        <p>{row.titulo}</p>
                                    </div>
                                </div>
                                )}

                            </div>

                            <div className="row slider">
                                <RangeSlider className="rg-slider"
                                    tooltip='off'
                                    min={1}
                                    max={valores.length}
                                    onChange={changeEvent => handleChangeValor(Number(changeEvent.target.value))}
                                />
                            </div>
                            
                            <div className="row leg">

                                { valores.map((row, key) => 
                                <div className="col-2" key={key}>
                                    <span>{row.numero}</span>
                                    <p>Msgs/Mês</p>
                                </div>
                                )}

                            </div>

                            <div className="row assine">
                                <span>Assine por</span>
                                <p>R$ {valorSelecionado.valor}/mês</p>
                                <Link onClick={(e) => setModalActive(true)}  className="bt cl-white bg-orange">Contrate agora</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RodaProdutos 
                texto="Nesta seção você poderá contar com todo o suporte que você e sua equipe precisará para extrair a melhor experiência com o Zoug."
                name="Zoug"
                ajudaDev="/ajuda/ajuda-desenvolvedores-zoug"
                ajudaCli="/ajuda/ajuda-clientes-zoug"
                ajudaTut="/ajuda/ajuda-tutoriais-zoug"
            />

            <Modal modalActive={modalActive}>
                <div className="row form">
                    <div className="col-12">
                        <button onClick={(e) => setModalActive(false)} className="close">X</button>
                        <div className="topoform">
                            <img  src={LogoForm} />
                            <span className="cl-black">Você escolheu:</span>
                            <p className="cl-orange">{planoSelecionado.numero} campanhas simultâneas <span className="cl-gray">| {valorSelecionado.numero} mensagens/mês</span></p>
                        </div>
                        <form method="post" onSubmit={handleSend}>
                            <p>Preencha os dados abaixo para continuar:</p>
                            <label>
                                <input type="text" value={camposFormulario.nome} onChange={(e) => changeInputMult(e)} name="nome" placeholder="Nome completo"/>
                            </label>
                            <label>
                                <input type="text" value={camposFormulario.empresa} onChange={(e) => changeInputMult(e)} name="empresa" placeholder="Nome da empresa"/>
                            </label>
                            <label>
                                <input type="text" value={camposFormulario.telefone} onChange={(e) => changeInputMult(e)} name="telefone" placeholder="Telefone para contato"/>
                            </label>
                            <label>
                                <input type="text" value={camposFormulario.email} onChange={(e) => changeInputMult(e)} name="email" placeholder="E-mail"/>
                            </label>
                            <button className="cl-white bg-orange bt">{newsletterLoad === true ? <FiLoader /> : "Contrate agora"}</button>
                        </form>
                    </div>
                </div>
            </Modal>
           
        </section>
    );  
}