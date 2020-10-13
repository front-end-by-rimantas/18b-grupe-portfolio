function isValidService(service) {
    let errors = [];

    if (typeof service.active !== 'boolean') {
        errors.push('ERROR: paslaugos aktyvumo statusas turi buti boolean tipo.');
    }

    if (typeof service.title !== 'string') {
        errors.push('ERROR: paslaugos pavadinimas turi buti tekstinis.');
    } else {
        if (service.title === '') {
            errors.push('ERROR: paslaugos pavadinimas negali buti tuscias.');
        }
        if (service.title.length > 30) {
            errors.push('ERROR: paslaugos pavadinimas yra per ilgas.');
        }
    }

    if (typeof service.description !== 'string') {
        errors.push('ERROR: paslaugos aprasymas turi buti tekstinis.');
    } else {
        if (service.description === '') {
            errors.push('ERROR: paslaugos aprasymas negali buti tuscias.');
        }
        if (service.description.length > 150) {
            errors.push('ERROR: paslaugos aprasymas yra per ilgas.');
        }
    }

    if (typeof service.link !== 'string') {
        errors.push('ERROR: paslaugos nuoroda turi buti tekstine.');
    } else {
        if (service.link === '') {
            errors.push('ERROR: paslaugos nuoroda negali buti tuscia.');
        }
        if (service.link.length > 30) {
            errors.push('ERROR: paslaugos nuoroda yra per ilga.');
        }
    }

    if (typeof service.image !== 'string') {
        errors.push('ERROR: paslaugos nuotraukos pavadinimas turi buti tekstinis.');
    } else {
        if (service.image.length < 5) {
            errors.push('ERROR: paslaugos nuotraukos pavadinimas negali buti per trumpas.');
        }
        if (service.image.length > 50) {
            errors.push('ERROR: paslaugos nuotraukos pavadinimas yra per ilgas.');
        }
        // TODO: insert file name validation (images only)
    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            console.error(errors[i])
        }

        return false;
    }

    // negeneruojame neaktyviu paslaugu
    if (!service.active) {
        return false;
    }

    return true;
}

export { isValidService }