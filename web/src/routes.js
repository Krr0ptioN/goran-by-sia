import React, { lazy } from 'react'
import NotFoundPage from './pages/error/404'

import HomePage from '@/pages/home'

const DashboardPage = lazy(() => import('@/pages/dashboard'))
const CalendarPage = lazy(() => import('@/pages/calendar'))
const LoginPage = lazy(() => import('@/pages/login'))

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/search', element: <DashboardPage /> },
      { path: '/library', element: <CalendarPage /> },
      { path: '/favorite', element: <CalendarPage /> },
      { path: '/playlist/new', element: <CalendarPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
]
