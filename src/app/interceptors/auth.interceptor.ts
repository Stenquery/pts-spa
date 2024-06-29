import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   let token = localStorage.getItem("token");
//   let newReq=req.clone({setHeaders:{
//     Authorization:'Baerer '+token
//   }});

//   return next(newReq);
// };

// @Injectable()
// export const authInterceptor: HttpInterceptorFn = (
//   req: HttpRequest<any>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<any>> => {
// const token = localStorage.getItem('token');
// if (token) {
//   const cloned = req.clone({
//     setHeaders: {
//       authorization: token,
//     },
//   });
//   return next(cloned);
// } else {
//   return next(req);
// }
// };

// @Injectable()
export const AuthInterceptor:HttpInterceptorFn  = (
     request: HttpRequest<any>,
     next: HttpHandlerFn
): Observable<HttpEvent<any>> => {

    let token = localStorage.getItem("token");
   if (token) {
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer " + token)
    })
    return next(newRequest);
   } else {
    return next(request);
   }
   
   
    
}
