import { server } from './lib/server.js';

const app = {};

app.init = () => {
    // susikurti busimus reikiamus folder'ius
    // susikurti busimus reikiamus failus, pvz.: robots.txt

    // prisijungti prie duomenu bazes (DB)

    // paleidziam pacio serverio logika (perduodame prisijungima prie DB)
    server.init();

    // paleidzia papildomus nuolatinius procesus:
    // - issitrinti nebereikalingus failus
    // - suarchivuoti retai naudojamus failus
    // - prasukti reikiamus API (3rd-party info, pvz.: valiutu kursai, orai)
    // - pasitikrinti, jog vartotojai, kurie neturi teises buti prisijunge, jog ir nera prisijunge, o jei yra - atjungiame!!!
}

app.init();

export default app;

// import { server } from './lib/server.js';

// const config = {};

// config.dev = {
//     name: 'dev',
// }

// config.prod = {
//     name: 'prod',
// }

// const nodeENV = process.env.NODE_ENV;
// const env = nodeEnv ? nodeEnv : 'dev';
// const options = config[env] ? config[env] : config.dev;



