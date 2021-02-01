/**
 * @module routesForChunking This modules builds up the page with the concept of sending the 
 * 								HTML back in chunks
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Head } from './src/components/Head';
import { Header } from './src/components/Header';
import { getProducts, navigationMenu, getPdpProduct } from './src/data';
import { ProductListing } from './src/components/ProductListing';
import { ProductDescription } from './src/components/ProductDescription';
import { Footer } from './src/components/Footer';

/**
 * @function getHead This function makes the head part of the HTML. It internally
 * 					 complies the react component of the same as well. Its flushes the prepared html back to client.
 * @returns {string} Returns the HTML string
 */
const getHead = (req,res,next) => {
	res.set({
		'Content-Type': 'text/html; charset=UTF-8', //This is done to overcome the issue of minimum number of bytes needed to render the DOM in firefox.
	});
	res.write(`<!DOCTYPE html>
		<html>${renderToString(<Head/>)}`);
	next();
}

/**
 * @function getHeader This function makes the header part of the HTML. It internally
 * 					 complies the react component of the same as well. Its flushes the prepared html back to client.
 * @returns {string} Returns the HTML string
 */
const getHeader = (req,res,next) => {
	res.write(`<body><div id="app">${renderToString(<Header navigation={navigationMenu} url={`/${req.baseUrl}/plp`}/>)}`);
	next();
}

const getMainBody = (req,res,next) => {
	setTimeout(() => {
		const pageType = req.params.page,
		  	  baseUrl = req.originalUrl.split("/")[1];
		if(pageType === "plp") {
			res.write(`<main>${renderToString(<ProductListing products={getProducts()} conceptType={baseUrl}/>)}</main>`);
		} else {
			res.write(`<main>${renderToString(<ProductDescription product={getPdpProduct()} conceptType={baseUrl}/>)}</main>`);
		}
		next();
	},2000);
}

const getFooter = (req,res,next) => {
	res.write(`${renderToString(<Footer navigation={navigationMenu} url={`/${req.baseUrl}/plp`}/>)}
		<script src="/bundle.js"></script>
		</body>
		</html>
	`);
	res.send();
}


/**
 * @function nonChunking This function builds up the eniter HTML and sends back to the browsers 
 * 								  once all of it is done.
 */
export const nonChunking = () => {
    return ([[getHead,getHeader, getMainBody, getFooter]]);
}