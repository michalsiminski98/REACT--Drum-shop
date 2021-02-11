import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShopPage from '../pages/ShopPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return ( 
        <Switch>
            <Route path="/" exact component={ShopPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/cart" component={CartPage}/>
            <Route component={ErrorPage}/>
        </Switch>
     );
}
 
export default Page;