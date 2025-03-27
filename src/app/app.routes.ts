import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';


export const routes: Routes = [
    { 
        canActivate: [publicGuard],
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes'),
    },
    { 
        path: 'content',
        loadChildren: () => import('./component/public/public.routes'),
    },
    { 
        canActivate: [privateGuard],
        path: 'private',
        loadChildren: () => import('./component/private/private.routes'),
    },
    { 
        path: '**',
        loadChildren: () => import('./component/public/public.routes'),
    }, 
];

