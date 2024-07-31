import { lazy } from "react"
import Products from "../../views/admin/Products"
import AddProduct from "../../views/admin/AddProduct"
const Sellers = lazy(() => import('./../../views/admin/Sellers'))
const SellerDetail = lazy(() => import('../../views/admin/SellerDetail'))
const Chat = lazy(() => import('./../../views/admin/Chat'))
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
  {
    path: '/admin/dashboard/products',
    element: <Products/>,
    role: "admin"
  },
  {
    path: '/admin/dashboard/add-product',
    element: <AddProduct/>,
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