import asyncComponent from 'utils/asyncComponent'

export const HomePage = asyncComponent(() => import('./HomePage'))
export const LoginPage = asyncComponent(() => import('./LoginPage'))
export const SignUpPage = asyncComponent(() => import('./SignUpPage'))
export const SearchPage = asyncComponent(() => import('./SearchPage'))
export const DetailPage = asyncComponent(() => import('./DetailPage'))
export const OwnerPage = asyncComponent(() => import('./OwnerPage'))
export const NotFoundPage = asyncComponent(() => import('./NotFoundPage'))
