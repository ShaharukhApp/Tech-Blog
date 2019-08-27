import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class JwtvalidInterceptor implements HttpInterceptor{
 constructor(private router: Router){}
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  const tokenobj = localStorage.getItem('session_id') ? JSON.parse(localStorage.getItem('session_id')) : null;

  if (tokenobj) {
    console.log(' Token Inside Interceptor file ' + tokenobj.token);
    request = request.clone({
        headers: request.headers.set('x-access-token', tokenobj.token)
      });
     }
  if(!request.headers.has('Content-Type')){
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});

  }

  request = request.clone({headers: request.headers.set('Accept', 'application/json')});


  return next.handle(request).pipe(
    map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
        }
        return event;
    }),
    catchError((error: HttpErrorResponse) => {
         console.log('Something Goes Wrong with Http Request');
         return throwError(error);
    }));





  }


}

