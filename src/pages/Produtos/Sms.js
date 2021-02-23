import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import { FiCheck } from 'react-icons/fi'

import swal from 'sweetalert';

import TopoProdutos from './Components/TopoProdutos';
import RodaProdutos from './Components/RodaProdutos';

import LogoForm from '../../assets/img/produtos/sms/logo-form.svg';
import Logo from '../../assets/img/produtos/sms/logo.svg';
import Image1 from '../../assets/img/produtos/sms/image1.svg';
import Image2 from '../../assets/img/produtos/sms/image2.svg';
import Image3 from '../../assets/img/produtos/sms/image3.svg';
import InfoImage from '../../assets/img/produtos/sms/infoimage.svg';
import Image1png from '../../assets/img/produtos/sms/image1.png'
import { FiLoader } from 'react-icons/fi'

import { Modal } from '../components/Modal';
import { api } from '../../api/app';
import { useEffect } from 'react';
import { BrowserView } from 'react-device-detect';

export default function Sms(){

    const [modalActive, setModalActive] = useState(false);

    const [ value, setValue ] = useState(0)
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

        let list = await api.get('/planos?produto=sms')

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
        <section id="prod-sms">
            <TopoProdutos
                name="SMS"
                title="Profissionalize sua comunicação" 
                subtitle="
                    Com o Zink SMS você consegue a atenção com mais de 90% do seu público de envio com agilidade, economia e total segurança.
                "
                bg="bg-orange"
            
            />

            <div id="para-voce">
                <div className="content">
                    <div class="row">
                        <div className="col-md-12 col-lg-6 box-img" align="center">
                            <img src={Logo} />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <h2>Zink SMS é para você:</h2>
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <li>Divulgação</li>
                                        <li>Cobrança</li>
                                        <li>Lembretes</li>
                                        <li>Agendamentos</li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>Notificações</li>
                                        <li>Novidades</li>
                                        <li>Pesquisa</li>
                                    </ul>
                                </div>      
                            </div>

                        </div>
                    </div>

                    <div className="row infos no-gutters">
                        <div className="col-md-12 col-lg-8">
                            <h2>Recursos</h2>
                            <p>
                                SMS (Short Message Service), também conhecido popularmente como torpedo, é a solução mais utilizada pelas empresas para se comunicar com clientes.
                                <br /><br />
                                Com entrega imediata, custo menor que a maioria das mídias e taxa de abertura de até 98% (Daniel Rowles, Mobile Marketing) é possível impactar 100% dos usuários mobile com mensagens de texto de até 160 caracteres.
                                <br /><br />
                                Por isso, o formato segue em constante crescimento, mesmo com a popularidade de outros canais de mensagem, tornando-se cada vez mais estratégico na automação de comunicações de pequenas, médias e grandes empresas.
                                <br /><br />
                            </p>
                            <span>Envie SMS para milhares de contatos com a mesma facilidade que você faz do seu celular!</span>
                        </div>
                        <div className="col-md-12 col-lg-4 image-align">
                            <img src={InfoImage} />
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

            <div id="como-funciona">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 col-lg-5 align-center">
                            <h2>Como Funciona?</h2>
                            <div className="bx-cf">
                                <span>1.</span>
                                <p>Cadastre seus contatos/leads;</p>
                            </div>
                            <div className="bx-cf">
                                <span>2.</span>
                                <p>Crie uma mensagem até 160 caracteres que engage o consumidor no seu objetivo;</p>
                            </div>
                            <div className="bx-cf">
                                <span>3.</span>
                                <p>Envie e seja lido. <b>Mensagens SMS são abertas por 98% dos usuários e 90% são lidas em até 3 minutos.</b></p>
                            </div>
                        </div>
                        
                        <div className="col-7">
                            <BrowserView>
                                <img src={Image3} />
                            </BrowserView>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div id="planos">
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <h2>Planos SMS</h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-12 col-lg-4">
                            { planos.map((row, key) => 
                                <div className="description">
                                    <span>Você escolheu:</span>
                                    <p>{planoSelecionado.numero} campanhas simultâneas</p>
                                    <hr />
                                    <ul dangerouslySetInnerHTML={{__html: planoSelecionado.texto}}/>
                                </div>
                            )}
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
                ajudaDev="/ajuda/ajuda-desenvolvedores-sms"
                ajudaCli="/ajuda/ajuda-clientes-sms"
                ajudaTut="/ajuda/ajuda-tutoriais-sms"
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