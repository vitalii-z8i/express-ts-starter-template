import express from 'express'
import loaders from './loaders'

const app = express();

loaders.init({ app });

export { app }
