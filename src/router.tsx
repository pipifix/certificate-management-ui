import { createBrowserRouter } from 'react-router-dom'
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'
import UnauthorisedError from './pages/errors/unauthorised-error.tsx'

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/sign-in',
    lazy: async () => ({
      Component: (await import('./pages/auth/sign-in')).default,
    }),
  },
  {
    path: '/sign-in-2',
    lazy: async () => ({
      Component: (await import('./pages/auth/sign-in-2')).default,
    }),
  },
  {
    path: '/sign-up',
    lazy: async () => ({
      Component: (await import('./pages/auth/sign-up')).default,
    }),
  },
  {
    path: '/forgot-password',
    lazy: async () => ({
      Component: (await import('./pages/auth/forgot-password')).default,
    }),
  },
  {
    path: '/otp',
    lazy: async () => ({
      Component: (await import('./pages/auth/otp')).default,
    }),
  },

  // Main routes
  {
    path: '/',
    lazy: async () => {
      const AppShell = await import('@/components/app-shell')
      return { Component: AppShell.default }
    },
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@/pages/dashboard')).default,
        }),
      },
      {
        path: 'import-certificates',
        lazy: async () => ({
          Component: (await import('@/pages/import/import-certificates.tsx')).default,
        }),
      },
      {
        path: 'test',
        lazy: async () => ({
          Component: (await import('@/pages/test'))
            .default,
        }),
      },
      {
        path: 'test/staff',
        lazy: async () => ({
          Component: (await import('@/pages/test/employees'))
            .default,
        }),
      },
      {
        path: 'import-private-keys',
        lazy: async () => ({
          Component: (await import('@/pages/import/import-private-keys.tsx'))
            .default,
        }),
      },
      {
        path: '/tenants',
        lazy: async () => ({
          Component: (await import('@/pages/tenants')).default,
        }),
      },
      {
        path: '/docs',
        lazy: async () => ({
          Component: (await import('@/pages/help/docs.tsx')).default,
        }),
      },
      {
        path: '/help',
        lazy: async () => ({
          Component: (await import('@/pages/help')).default,
        }),
      },
      {
        path: '/submitted-certificates',
        lazy: async () => ({
          Component: (await import('@/pages/functions/submitted-certificates.tsx'))
            .default,
        }),
      },
      {
        path: '/public-certificates',
        lazy: async () => ({
          Component: (await import('@/pages/functions/public-certificates.tsx'))
            .default,
        }),
      },
       {
        path: '/exhibitor-certificates',
        lazy: async () => ({
          Component: (await import('@/pages/functions/exhibitor-certificates.tsx')).default,
        }),
      },
      {
        path: '/private-keys',
        lazy: async () => ({
          Component: (await import('@/pages/functions/private-keys.tsx'))
            .default,
        }),
      },
      {
        path: '/private-pgp-keys',
        lazy: async () => ({
          Component: (await import('@/pages/functions/private-pgp-keys.tsx'))
            .default,
        }),
      },
      {
        path: '/public-pgp-keys',
        lazy: async () => ({
          Component: (await import('@/pages/functions/public-pgp-keys.tsx'))
            .default,
        }),
      },
    ],
  },

  // Error routes
  { path: '/500', Component: GeneralError },
  { path: '/404', Component: NotFoundError },
  { path: '/503', Component: MaintenanceError },
  { path: '/401', Component: UnauthorisedError },

  // Fallback 404 route
  { path: '*', Component: NotFoundError },
])

export default router
