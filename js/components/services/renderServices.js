import { generateSingleService } from './generateSingleService.js';

function renderServices(data) {
    // input validation

    // logic
    let HTML = '';
    const servicesDOM = document.querySelector(data.selector);
    const servicesCount = data.services.length;

    for (let i = 0; i < servicesCount; i++) {
        const service = data.services[i];
        HTML += generateSingleService(service, data.imagePath, true);
    }

    // post logic validation
    if (HTML === '') {
        console.error('ERROR: nera nei vienos normalios veikiancios paslaugos!');
        return;
    }

    // output
    return servicesDOM.innerHTML = HTML;
}

export { renderServices }