import { RabbitTester } from '../../RabbitTester/RabbitTester.js';
import { isValidService } from './isValidService.js';

const rabbit = new RabbitTester();

rabbit.addTest(isValidService(), false);
rabbit.addTest(isValidService(5), false);
rabbit.addTest(isValidService('dsasd'), false);
rabbit.addTest(isValidService(true), false);
rabbit.addTest(isValidService(false), false);
rabbit.addTest(isValidService([]), false);
rabbit.addTest(isValidService({}), false);

rabbit.addTest(isValidService({
    image: 'service-1.png',
    imageAlt: 'Design image',
    title: '',
    description: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
    link: '#',
    active: true
}), false);

rabbit.addTest(isValidService({
    image: 'service-1.png',
    imageAlt: 'Design image',
    title: 'IT Design',
    link: '#',
    active: true
}), false);

rabbit.addTest(isValidService({
    image: 'service-1.png',
    imageAlt: 'Design image',
    title: 'IT Design',
    description: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
    active: true
}), false);

rabbit.addTest(isValidService({
    image: 'service-1.png',
    imageAlt: 'Design image',
    title: 'IT Design',
    description: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
    link: '#',
    active: true
}), true);

rabbit.addTest(isValidService({
    image: 'service-2.png',
    imageAlt: 'Management image',
    description: 'It’s possible to simultaneously manage and transform information from one server to another.',
    link: '#',
    active: true
}), false);

rabbit.addTest(isValidService({
    image: 'service-2.png',
    imageAlt: 'Malku skaldymas image',
    title: 'Malku skaldymas',
    description: 'It’s possible to simultaneously manage and transform information from one server to another.',
    link: '#',
    active: false
}), false);

rabbit.run();


/*
Is valid service - valid: 6/6; failed: 0/6          (zalias bold)
*/

/*
Is valid service - valid: 5/6; failed: 1/6          (bold)
Failed test: 4                                      (raudonas)
    expected: false;                                (raudonas)
    got: true                                       (raudonas)
*/