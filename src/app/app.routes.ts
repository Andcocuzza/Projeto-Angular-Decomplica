// Importa o tipo Routes do Angular Router
import { Routes } from '@angular/router';

// Importa o guard de autenticação
import { authGuard } from './guards/auth-guard';


// Cria o array principal de rotas da aplicação
export const routes: Routes = [

  // =========================
  // ROTA INICIAL
  // =========================
  {
    // caminho vazio = localhost:4200
  
  path: '',
  redirectTo: 'courses',
  pathMatch: 'full'
},

  // =========================
  // ROTA COURSES
  // =========================
  {
    // URL -> /courses
    path: 'courses',

    // Lazy Loading
    // carrega as rotas apenas quando necessário
    loadChildren: () =>

      // importa dinamicamente o arquivo courses.ts
      import('./features/courses/courses')

        // pega o export chamado routes
        .then(m => m.routes),

    // protege a rota
    // só entra se passar pelo AuthGuard
    canActivate: [authGuard]
  },



  // =========================
  // ROTA AUTH
  // =========================
  {
    // URL -> /auth
    path: 'auth',

    // carrega as rotas de autenticação
    loadChildren: () =>

      // importa auth.ts
      import('./features/auth/auth')

        // pega o export routes
         .then(m => m.routes)
  },



  {
     // ROTA 404
    path: '**',
    redirectTo:'courses'
  }

];

  