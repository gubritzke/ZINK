import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './pages/Partials/Layout'

import Index from './pages/Index/Index';
import Zoug from './pages/Produtos/Zoug';
import Builder from './pages/Produtos/Builder';
import Sms from './pages/Produtos/Sms';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Ajuda from './pages/Ajuda/Ajuda';
import AjudaDevZoug from './pages/Ajuda/Desenvolvedor/AjudaDesenvolvedoresZoug';
import AjudaDevBuilder from './pages/Ajuda/Desenvolvedor/AjudaDesenvolvedoresBuilder';
import AjudaDevSms from './pages/Ajuda/Desenvolvedor/AjudaDesenvolvedoresSms';
import AjudaClientesZoug from './pages/Ajuda/Clientes/AjudaClientesZoug';
import AjudaClientesBuilder from './pages/Ajuda/Clientes/AjudaClientesBuilder';
import AjudaClientesSms from './pages/Ajuda/Clientes/AjudaClientesSms';
import AjudaTutoriaisZoug from './pages/Ajuda/Tutoriais/AjudaTutoriaisZoug';
import AjudaTutoriaisBuilder from './pages/Ajuda/Tutoriais/AjudaTutoriaisBuilder';
import AjudaTutoriaisSms from './pages/Ajuda/Tutoriais/AjudaTutoriaisSms';
import Blog from './pages/Blog/blog';
import Detalhe from './pages/Blog/detalhe';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route path="/" exact component={Index} />
                    <Route path="/zoug" exact component={Zoug} />
                    <Route path="/builder" exact component={Builder} />
                    <Route path="/sms" exact component={Sms} />
                    <Route path="/sobre" exact component={Sobre} />
                    <Route path="/contato" exact component={Contato} />
                    <Route path="/ajuda" exact component={Ajuda} />
                    <Route path="/ajuda/ajuda-desenvolvedores-zoug" exact component={AjudaDevZoug} />
                    <Route path="/ajuda/ajuda-desenvolvedores-builder" exact component={AjudaDevBuilder} />
                    <Route path="/ajuda/ajuda-desenvolvedores-sms" exact component={AjudaDevSms} />
                    <Route path="/ajuda/ajuda-clientes-zoug" exact component={AjudaClientesZoug} />
                    <Route path="/ajuda/ajuda-clientes-builder" exact component={AjudaClientesBuilder} />
                    <Route path="/ajuda/ajuda-clientes-sms" exact component={AjudaClientesSms} />
                    <Route path="/ajuda/ajuda-tutoriais-zoug" exact component={AjudaTutoriaisZoug} />
                    <Route path="/ajuda/ajuda-tutoriais-builder" exact component={AjudaTutoriaisBuilder} />
                    <Route path="/ajuda/ajuda-tutoriais-sms" exact component={AjudaTutoriaisSms} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/detalhe" exact component={Detalhe} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}
