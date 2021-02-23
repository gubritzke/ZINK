import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import { FiCheck } from 'react-icons/fi'

import swal from 'sweetalert';

import TopoProdutos from './Components/TopoProdutos';
import RodaProdutos from './Components/RodaProdutos';

import LogoForm from '../../assets/img/produtos/builder/logo-form.svg';
import Logo from '../../assets/img/produtos/builder/logo.svg';
import Image1 from '../../assets/img/produtos/builder/image1.svg';
import Image2 from '../../assets/img/produtos/builder/image2.svg';
import Image3 from '../../assets/img/produtos/builder/image3.svg';
import Image1png from '../../assets/img/produtos/builder/image1.png'
import { FiLoader } from 'react-icons/fi'

import { Modal } from '../components/Modal';
import { api } from '../../api/app';
import { useEffect } from 'react';
import { BrowserView } from 'react-device-detect';

export default function Builder(){

    const [modalActive, setModalActive] = useState(false);
    const [ tabs, setTabs ] = useState('funcionalidades')

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

        let list = await api.get('/planos?produto=builder')

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
        <section id="prod-builder">
            <TopoProdutos
                name="Builder"
                title="Crie experiências" 
                subtitle="
                    Com o Zink Builder você tem o poder da automação e aceleração de campanhas digitais, com um exclusivo construtor de landing pages para comunicação e interatividade mobile.
                "
                bg="bg-green"
            
            />

            <div id="para-voce">
                <div className="content">
                    <div class="row">
                        <div className="col-md-12 col-lg-6 box-img" align="center">
                            <img src={Logo} />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <h2>Builder é para você:</h2>
                            <ul>
                                <li>Agências de propaganda e marketing;</li>
                                <li>Cobrança</li>
                                <li>Venda de produtos;</li>
                                <li>Fidelização de clientes;</li>
                                <li>Pesquisa.</li>
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
                            <a onClick={() => setTabs('funcionalidades')}
                                className={tabs === 'funcionalidades' && 'active'}
                            >Funcionalidades</a>
                        </div>
                        <div className="col-4">
                            <a onClick={() => setTabs('diferenciais')}
                                className={tabs === 'diferenciais' && 'active'}>Diferenciais</a>
                        </div>
                        <div className="col-12">
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-12 menu-1 ${tabs === 'funcionalidades' && 'active'}`} >
                            <div className="row">
                                <div className="col-md-12 col-lg-5">
                                    <ul>
                                        <li>
                                            Crie de <b>forma simples e prática</b> um template do zero ou adquira templates pré-formatados por categoria;
                                        </li>
                                        <li>
                                             Diversos call-to-action como: <b>telefone, sms, WhatsApp, email;</b>
                                        </li>
                                        <li>
                                             Utilize <b>variáveis na composição do template</b> e do sms, personalizando de acordo com o destinatário;
                                        </li>
                                        <li>
                                            <b>Relatórios</b> de cliques, interações, preenchimentos de formulário, envios e respostas de sms;
                                        </li>
                                        <li>
                                            Limite o acesso a landing page por “<b>senha</b>”;
                                        </li>
                                        <li>
                                            Adicione usuários com controle de permissão.
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="col-7">
                                    <BrowserView>
                                        <img src={Image3} />
                                    </BrowserView>
                                </div>
                                
                            </div>
                        </div>
                        <div className={`col-12 menu-2 ${tabs === 'diferenciais' && 'active'}`} >
                            <div className="row">
                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Identificar quem clicou ou interagiu; o que não é possível utilizando criadores de landing page gratuitos;
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Personalização por destinatário;
                                        </p>
                                        </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Otimização de tempo ao unificar a criação de uma landing page ao envio de uma campanha SMS;
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="box">
                                        <p>
                                            Integração com o Google Analytics.
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
                            <h2>Planos Builder</h2>
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
                texto="Nesta seção você poderá contar com todo o suporte que você e sua equipe precisará para extrair a melhor experiência com o Builder. "
                name="Builder"
                ajudaDev="/ajuda/ajuda-desenvolvedores-builder"
                ajudaCli="/ajuda/ajuda-clientes-builder"
                ajudaTut="/ajuda/ajuda-tutoriais-builder"
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