import { IoHome } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BsChatText } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export const allNav = [
  // Admin Navigation
  {
    id: 1,
    title: 'Categories',
    icon: <BiSolidCategory />,
    role: 'admin',
    path: '/admin/dashboard/categories'
  },
  {
    id: 2,
    title: 'Sellers',
    icon: <HiOutlineUserGroup />,
    role: 'admin',
    path: '/admin/dashboard/sellers'
  },
  {
    id: 3,
    title: 'Chat',
    icon: <BsChatText />,
    role: 'admin',
    path: '/admin/dashboard/chat'
  },
  // Seller Navigation
  {
    id: 4,
    title: 'Dashboard',
    icon: <IoHome />,
    role: 'seller',
    path: '/seller/dashboard'
  },
  {
    id: 5,
    title: 'Orders',
    icon: <BiReceipt />,
    role: 'seller',
    path: '/seller/dashboard/orders'
  },
  {
    id: 6,
    title: 'Products',
    icon: <FaBox />,
    role: 'seller',
    path: '/seller/dashboard/products'
  },
  {
    id: 7,
    title: 'Add Product',
    icon: <MdOutlineAddShoppingCart />,
    role: 'seller',
    path: '/seller/dashboard/add-product'
  },
  {
    id: 8,
    title: 'Chat Customer',
    icon: <BsChatText />,
    role: 'seller',
    path: '/seller/dashboard/chat-customer'
  },
  {
    id: 9,
    title: 'Chat Admin',
    icon: <BsChatText />,
    role: 'seller',
    path: '/seller/dashboard/chat-admin'
  },
  {
    id: 10,
    title: 'Profile',
    icon: <ImProfile />,
    role: 'seller',
    path: '/seller/dashboard/profile'
  },
  {
    id: 10,
    title: 'Home',
    role: 'customer',
    path: '/'
  },
  {
    id: 10,
    title: 'Products',
    role: 'customer',
    path: '/products'
  },
  {
    id: 10,
    title: 'Blogs',
    role: 'customer',
    path: '/blogs'
  },
  {
    id: 10,
    title: 'About Us',
    role: 'customer',
    path: '/about'
  },
]