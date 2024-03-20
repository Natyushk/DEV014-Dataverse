//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const itemsUl = renderItems(data);
document.querySelector("main").appendChild(itemsUl);