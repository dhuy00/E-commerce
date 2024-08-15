import { lazy } from "react"
const Deactive = lazy(() => import("./../../views/seller/Deactive"))
const Pending = lazy(() => import("./../../views/seller/Pending"))
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
    role: 'seller',
    status: ['active']
  },
  {
    path: '/seller/dashboard/orders',
    element: <Orders/>,
    role: 'seller',
    status: ['active']
  },
  {
    path: '/seller/dashboard/orders/:id',
    element: <OrderDetail/>,
    role: 'seller',
    status: ['active']
  },
  {
    path: '/seller/dashboard/products',
    element: <Products/>,
    role: 'seller',
    status: ['active']
  },
  {
    path: '/seller/dashboard/add-product',
    element: <AddProduct/>,
    role: 'seller',
    status: ['active']
  },
  {
    path: '/seller/dashboard/chat-customer',
    element: <ChatCustomer/>,
    role: 'seller',
    status: ['active']
  },
  {
    path: '/seller/dashboard/chat-admin',
    element: <ChatAdmin/>,
    role: 'seller',
    status: ['active', 'deactive', 'pending']
  },
  {
    path: '/seller/dashboard/profile',
    element: <Profile/>,
    role: 'seller',
    status: ['active', 'deactive', 'pending']
  },
  {
    path: '/seller/account-deactive',
    element: <Deactive/>,
    role: 'seller',
    status: ['deactive']
  },
  {
    path: '/seller/account-pending',
    element: <Pending/>,
    role: 'seller',
    status: ['pending']
  },
]

export default sellerRoutes