import { renderToString } from 'react-dom/server';
import {App} from './src/components/App';

export const chunking = (req, res) => res.send(`${renderToString(<App />)}`);