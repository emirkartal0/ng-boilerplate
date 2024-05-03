import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
    provideHttpClient,
    withFetch,
    withInterceptors,
} from '@angular/common/http';
import { routes } from './app.routes';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { baseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { httpCodesInterceptor } from './core/interceptors/http-codes.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(
            withInterceptors([
                loadingInterceptor,
                tokenInterceptor,
                baseUrlInterceptor,
                httpCodesInterceptor,
            ]),
            withFetch()
        ),
    ],
};
