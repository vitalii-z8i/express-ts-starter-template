import { Request, Response, Router } from "express"

export default (() => {
  const router = Router()
  router.get('/get/some', (req: Request, res: Response) => {
    res.send('Got Some')
  })

  return router
})()
