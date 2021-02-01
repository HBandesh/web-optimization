/**
 * This module is the entry point of Express.
 */

import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import { chunking } from './chunking';
import { nonChunking } from './nonChunking';

const port = process.env.PORT || 8080 ,
__dirname = path.resolve(),
server = express();

//Compressing the data before sending it back to client.
server.use(compression());
server.use(express.static('./public'));

//Defining Routes
//Route for Home page
server.get("/home",(req,res) => res.sendFile(path.join(__dirname + '/serverIndex.html')));
//Route for Page with the chunking concept implemented.
server.get("/chunking/:page",chunking());
//Route for the page without chunking concept implemented.
server.get("/nonChunking/:page",nonChunking());

server.listen(port,()=>{
	console.log("express server is listing on configured port "+port);
});