// header import
import { headerData } from './data/header.js';
import { Header } from './components/header/Header.js';
// hero import
// clients import
// services import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
// case studies
import { caseStudiesData } from './data/case-studies.js';
import { CaseStudies } from './components/case-studies/CaseStudies.js';
import { Carousel } from './components/carousel/Carousel.js';
// achievements
import { achievementsData } from './data/achievements.js';
import { Achievements } from './components/achievements/Achievements.js';

// header logic
new Header(headerData);
// hero logic
// clients logic
// services logic
renderServices(servicesData);
// case studies
new Carousel({
    data: caseStudiesData,
    renderEngine: CaseStudies,
    breakpoints: [800, 1100]
});
// achievements
new Achievements(achievementsData);