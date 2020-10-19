// header import
import { headerData } from './data/header.js';
import { Header } from './components/header/Header.js';
// hero import
// clients import
// services import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';


// header logic
new Header(headerData);
// hero logic
// clients logic
// services logic
renderServices(servicesData);