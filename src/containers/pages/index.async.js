import asyncComponent from 'utils/asyncComponent'

export const HomePage = asyncComponent(() => import('./HomePage'))
export const LoginPage = asyncComponent(() => import('./LoginPage'))
export const SignUpPage = asyncComponent(() => import('./SignUpPage'))
export const SearchPage = asyncComponent(() => import('./SearchPage'))
export const DetailPage = asyncComponent(() => import('./DetailPage'))
export const OrderPage = asyncComponent(() => import('./OrderPage'))
export const MyOrderPage = asyncComponent(() => import('./MyOrderPage'))
export const OwnerPage = asyncComponent(() => import('./OwnerPage'))
export const OwnerOrderPage = asyncComponent(() => import('./OwnerOrderPage'))
export const NotFoundPage = asyncComponent(() => import('./NotFoundPage'))
