import { lazy } from "react"
const AdminDashboard = lazy(() => import('./../../views/admin/AdminDashboard'))
const Orders = lazy(() => import('./../../views/admin/Orders'))
const Categories = lazy(() => import('./../../views/admin/Categories'))

const adminRoutes = [
  {
    path: '/admin/dashboard',
    element: <AdminDashboard/>,
    role: "admin"
  },
  {
    path: '/admin/dashboard/orders',
    element: <Orders/>,
    role: "admin"
  },
  {
    path: '/admin/dashboard/categories',
    element: <Categories/>,
    role: "admin"
  },
]

export default adminRoutes