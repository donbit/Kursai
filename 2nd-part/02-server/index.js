import { server } from './server.js';
console.log('hi')
const config = {};

config.dev = {
    name: 'dev',
}

config.prod = {
    name: 'prod',
}

const nodeENV = process.env.NODE_ENV;
const env = nodeEnv ? nodeEnv : 'dev';
const options = config[env] ? config[env] : config.dev;



