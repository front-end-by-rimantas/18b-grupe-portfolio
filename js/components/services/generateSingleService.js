import { isValidService } from './isValidService.js';

function generateSingleService(service, imagePath, showErrors = false) {
    // input validation
    if (!isValidService(service, showErrors)) {
        return '';
    }

    // logic
    // image alt text
    let imageAlt = service.imageAlt;
    if (!service.imageAlt || service.imageAlt === '') {
        imageAlt = service.title + ' image';
    }

    // image validation

    const HTML = `<div class="services col-4 col-lg-6 col-sm-12">
                    <img src="${imagePath + service.image}" alt="${imageAlt}">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <a href="${service.link}">></a>
                </div>`;

    // output
    return HTML;
}

export { generateSingleService }