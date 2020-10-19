import { RabbitTester } from '../../RabbitTester/RabbitTester.js';
import { generateSingleService } from './generateSingleService.js'

const rabbit = new RabbitTester();

rabbit.description('Generate single service');

rabbit.addTest(generateSingleService(), '');
rabbit.addTest(generateSingleService(5), '');
rabbit.addTest(generateSingleService('adsf'), '');
rabbit.addTest(generateSingleService(true), '');
rabbit.addTest(generateSingleService(false), '');
rabbit.addTest(generateSingleService([]), '');
rabbit.addTest(generateSingleService({}), '');
rabbit.addTest(generateSingleService({
    image: 'service-1.png',
    imageAlt: 'Design image',
    title: 'IT Design',
    description: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
    link: '#',
    active: true
}), `<div class="services col-4 col-lg-6 col-sm-12">\n                    <img src="undefinedservice-1.png" alt="Design image">\n                    <h3>IT Design</h3>\n                    <p>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>\n                    <a href="#">></a>\n                </div>`);
rabbit.addTest(generateSingleService({
    image: 'service-3.png',
    imageAlt: 'Data Security image',
    title: 'Data Security',
    description: 'Back up your database, store in a safe and secure place while still maintaining its accessibility.',
    link: '#',
    active: true
}), `<div class="services col-4 col-lg-6 col-sm-12">\n                    <img src="undefinedservice-3.png" alt="Data Security image">\n                    <h3>Data Security</h3>\n                    <p>Back up your database, store in a safe and secure place while still maintaining its accessibility.</p>\n                    <a href="#">></a>\n                </div>`);

rabbit.run();