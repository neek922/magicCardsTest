import type { Request, Response, ErrorRequestHandler } from 'express';

const onError: ErrorRequestHandler = (err, _req: Request, res: Response) => {
  console.log(err)
  const status = err.status || 500
  const message = err.message || 'Something went wrong. Try again later'
  res.status(status).json({ message })
}

export default onError
