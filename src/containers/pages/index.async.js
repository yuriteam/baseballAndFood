import asyncComponent from 'utils/asyncComponent'

export const HomePage = asyncComponent(() => import('./HomePage'))
export const LoginPage = asyncComponent(() => import('./LoginPage'))
export const SearchPage = asyncComponent(() => import('./SearchPage'))
export const NotFoundPage = asyncComponent(() => import('./NotFoundPage'))
