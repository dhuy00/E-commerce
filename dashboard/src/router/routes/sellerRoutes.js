import { lazy } from "react"
const Profile = lazy(() => import("./../../views/seller/Profile"))
const ChatAdmin = lazy(() => import("./../../views/seller/ChatAdmin"))
const ChatCustomer = lazy(() => import("./../../views/seller/ChatCustomer"))
const Dashboard = lazy(() => import("./../../views/seller/Dashboard"))
const Orders = lazy(() => import("./../../views/seller/Orders"))
const OrderDetail = lazy(() => import("./../../views/seller/OrderDetail"))
const Products = lazy(() => import("./../../views/seller/Products"))
const AddProduct = lazy(() => import("./../../views/seller/AddProduct"))



const sellerRoutes = [
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
  {
    path: '/seller/dashboard/chat-customer',
    element: <ChatCustomer/>,
    ability: ['seller']
  },
  {
    path: '/seller/dashboard/chat-admin',
    element: <ChatAdmin/>,
    ability: ['seller']
  },
  {
    path: '/seller/dashboard/profile',
    element: <Profile/>,
    ability: ['seller']
  },
]

export default sellerRoutes