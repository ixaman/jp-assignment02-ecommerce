import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (err) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: 'Validation Error',
        error: err,
      });
    }
  };
};

export default validateRequest;
