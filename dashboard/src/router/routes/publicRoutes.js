import { lazy } from "react";
const CustomerOrders = lazy(() => import("../../views/pages/customer-orders/CustomerOrders"));
const OrderReview = lazy(() => import("../../views/pages/order-review/OrderReview"));
const ProductDetail = lazy(() => import("../../views/pages/product-detail/ProductDetail"));
const LandingPage = lazy(() => import("../../views/pages/landing-page/LandingPage"));
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const Home = lazy(() => import("../../views/Home"));
const Unauthorized = lazy(() => import("../../views/error/Unauthorized"));


const publicRoutes = [
  {
    path: '/',
    element: <Home/>,
    ability: ['admin', 'seller']
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/admin/login',
    element: <AdminLogin/>
  },
  {
    path: '/unauthorized',
    element: <Unauthorized/>
  },
  {
    path: '/landingpage',
    element: <LandingPage/>
  },
  {
    path: '/product-detail',
    element: <ProductDetail/>
  },
  {
    path: '/order-review',
    element: <OrderReview/>
  },
  {
    path: '/customer-orders',
    element: <CustomerOrders/>
  },

]

export default publicRoutes