const isAutheticated = true;
const isManager = false;

import {Request, Response, NextFunction} from "express";


export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  if (isAutheticated) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
}

export function ManagerMiddleware(req: Request, res: Response, next:NextFunction) {
  if (isManager) {
    next();
  } else {
    res.status(405).json({ message: "Not Allowed" });
  }
}
