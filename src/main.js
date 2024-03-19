import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';


let nombre = renderItems(data);
console.log(nombre);