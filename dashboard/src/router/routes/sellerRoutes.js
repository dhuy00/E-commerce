import { lazy } from "react"
const Dashboard = lazy(() => import("./../../views/seller/Dashboard"))
const Orders = lazy(() => import("./../../views/seller/Orders"))
const OrderDetail = lazy(() => import("./../../views/seller/OrderDetail"))
const Products = lazy(() => import("./../../views/seller/Products"))
const AddProduct = lazy(() => import("./../../views/seller/AddProduct"))
const Home = lazy(() => import("../../views/Home"))


const sellerRoutes = [
  {
    path: '/',
    element: <Home/>,
    ability: ['admin', 'seller']
  },
  {
    path: '/seller/dashboard',
    element: <Dashboard/>,
    ability: ['seller']
  },
  {
    path: '/seller/dashboard/orders',
    element: <Orders/>,
    ability: ['seller']
  },
  {
    path: '/seller/dashboard/orders/:id',
    element: <OrderDetail/>,
    ability: ['seller']
  },
  {
    path: '/seller/dashboard/products',
    element: <Products/>,
    ability: ['seller']
  },
  {
    path: '/seller/dashboard/add-product',
    element: <AddProduct/>,
    ability: ['seller']
  },
]

export default sellerRoutes