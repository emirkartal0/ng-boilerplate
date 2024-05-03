import { HttpInterceptorFn } from '@angular/common/http';

export const httpCodesInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
