import { lazy } from "react";
const ShoppingCart = lazy(() => import("../../views/pages/shopping-cart/ShoppingCart"));
const AboutUs = lazy(() => import("../../views/pages/about-us/AboutUs"));
const Blog = lazy(() => import("../../views/pages/blogs/Blog"));
const Blogs = lazy(() => import("../../views/pages/blogs/Blogs"));
const Products = lazy(() => import("../../views/pages/products/Products"));
const CustomerOrderDetail = lazy(() => import("../../views/pages/customer-orders/CustomerOrderDetail"));
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
    path: '/product-detail/:id',
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
  {
    path: '/customer-orders/:id',
    element: <CustomerOrderDetail/>
  },
  {
    path: '/products',
    element: <Products/>
  },
  {
    path: '/blogs',
    element: <Blogs/>
  },
  {
    path: '/blogs/:id',
    element: <Blog/>
  },
  {
    path: '/about',
    element: <AboutUs/>
  },
  {
    path: '/shopping-cart/:id',
    element: <ShoppingCart/>
  },

]

export default publicRoutes