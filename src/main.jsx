import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// Los estilos globales van primero para que los CSS Modules de cada componente
// se carguen después y puedan sobrescribirlos.
import '@/styles/global.css';
import { router } from '@/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
