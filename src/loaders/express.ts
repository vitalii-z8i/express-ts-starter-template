import express from "express";
import logger from 'morgan'

export default {
  configure ({ app }: { app: express.Application }) {

    app.use(logger('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.get('/', async (req: express.Request, res: express.Response) => {
      res.send({ name: `Your Awesome API` })
    });
  }
}
