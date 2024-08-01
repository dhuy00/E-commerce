import { lazy } from "react"
const Sellers = lazy(() => import('./../../views/admin/Sellers'))
const SellerDetail = lazy(() => import('../../views/admin/SellerDetail'))
const Chat = lazy(() => import('./../../views/admin/Chat'))
const Categories = lazy(() => import('./../../views/admin/Categories'))

const adminRoutes = [
  
  {
    path: '/admin/dashboard/categories',
    element: <Categories/>,
    role: "admin"
  },
  {
    path: '/admin/dashboard/chat',
    element: <Chat/>,
    role: "admin"
  },
  {
    path: '/admin/dashboard/sellers',
    element: <Sellers/>,
    role: "admin"
  },
  {
    path: '/admin/dashboard/sellers/:id',
    element: <SellerDetail/>,
    role: "admin"
  },
]

export default adminRoutes