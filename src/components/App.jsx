import React from 'react';
import { Header } from './Header';
import { navigationMenu } from '../data';
import { ProductListing } from './ProductListing';
import { ProductDescription } from './ProductDescription';
import { Footer } from './Footer';
import { getProducts, getPdpProduct } from '../data';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

const Main = () => {
    let { path, url } = useRouteMatch();
    const conceptType = window.location.pathname.split("/")[1];
    return(
        <Switch>
            <Route path={`${path}/plp`}>
                <ProductListing products={getProducts()} conceptType={conceptType}/>
            </Route>
            <Route path={`${path}/pdp`}>
                <ProductDescription product={getPdpProduct()} conceptType={conceptType}/>
            </Route>
        </Switch>
    )
}

export const App = () => {
    const conceptType = window.location.pathname.split("/")[1],
          pageType = window.location.pathname.split("/")[2];
    return(
        <>
            <Header navigation={navigationMenu} url={`/${conceptType}/plp`}/>
            <main>
                <Router>
                    <Switch>
                        <Route path={`/${conceptType}`}>
                            <Main />
                        </Route>
                    </Switch>
                </Router>
            </main>
            <Footer navigation={navigationMenu} url={`/${conceptType}/plp`}/>
        </>
    )
};