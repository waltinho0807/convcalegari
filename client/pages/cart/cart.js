import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';

import HeroPages from '../../components/form/HeroPages';

import Cart from '../../components/cart/Cart';
import CartBread from '../../components/cart/CartBread';

const Carrinho = ({currentUser})=>{
    return (
        <div>
            <Head/>
           
            <HeroPages/>
            <CartBread/>
            <Cart/>    
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default Carrinho;