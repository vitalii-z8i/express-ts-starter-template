import express from 'express'
import expressLoader from './express'
import home from '../components/home'

export default {
  init ({ app }: { app: express.Application }) {
    expressLoader.configure({ app })

    home.attachTo({ app })
  }
}
