import { Routes } from '@angular/router';

export const routes: Routes = [
 {path: '' , redirectTo:'home', pathMatch:'full'},

    {
      path:'home',
      loadComponent:()=>
        import('./features/pages/home/home').then((c)=>c.Home),
    
    },

    {
      path:'**',
      loadComponent:()=>
        import('./shared/components/not-fpound/not-fpound').then((c)=>c.NotFpound),
    
    },

 

];
