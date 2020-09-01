import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';



import Contato from '../../components/contato/Contato';
import ContatoBread from '../../components/contato/ContatoBread';
import ContatoMap from '../../components/contato/ContatoMap';
import ContatoForm from '../../components/contato/ContatoForm';
import HeroPages from '../../components/form/HeroPages';

const Loja = ()=>{
    return (
        <div>
            
            
            <HeroPages/>
            <ContatoBread />
            <Contato/>
            <ContatoMap/>
            <ContatoForm/>
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default Loja;