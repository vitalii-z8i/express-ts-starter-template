import { Application } from "express";
import router from './router'

export default {
  attachTo ({ app }: { app: Application }) {
    app.use('/', router)
  }
}
