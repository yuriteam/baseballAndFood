import asyncComponent from 'utils/asyncComponent'

export const HomePage = asyncComponent(() => import('./HomePage'))
export const LoginPage = asyncComponent(() => import('./LoginPage'))
export const NotFoundPage = asyncComponent(() => import('./NotFoundPage'))
