import React from 'react';

import ShopDetailsRelated from '../../components/shop/ShopDetailsRelated';
import ShopDetailsBread from '../../components/shop/ShopDetailsBread';
import ShopDetails from '../../components/shop/ShopDeatails';
import HeroPages from '../../components/form/HeroPages';



const Loja = ({currentUser})=>{
    return (
        <div>
            <HeroPages/>
            <ShopDetailsBread/>
            <ShopDetails/> 
            <ShopDetailsRelated/>
        </div>
    )
   
}

export default Loja;