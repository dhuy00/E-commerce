import { IoHome } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoCloudOfflineSharp } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { IoIosGitPullRequest } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaBox } from "react-icons/fa";

export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <IoHome />,
    role: 'admin',
    path: '/admin/dashboard'
  },
  {
    id: 2,
    title: 'Orders',
    icon: <BiReceipt />,
    role: 'admin',
    path: '/admin/dashboard/orders'
  },
  {
    id: 3,
    title: 'Categories',
    icon: <BiSolidCategory />,
    role: 'admin',
    path: '/admin/dashboard/categories'
  },
  {
    id: 4,
    title: 'Sellers',
    icon: <HiOutlineUserGroup />,
    role: 'admin',
    path: '/admin/dashboard/sellers'
  },
  {
    id: 5,
    title: 'Products',
    icon: <FaBox />,
    role: 'admin',
    path: '/admin/dashboard/products'
  },
  {
    id: 6,
    title: 'Deactive Sellers',
    icon: <IoCloudOfflineSharp />,
    role: 'admin',
    path: '/admin/dashboard/deactive-sellers'
  },
  {
    id: 7,
    title: 'Add Product',
    icon: <MdOutlineAddShoppingCart />,
    role: 'admin',
    path: '/admin/dashboard/add-product'
  },
  {
    id: 8,
    title: 'Chat',
    icon: <BsChatText />,
    role: 'admin',
    path: '/admin/dashboard/chat'
  },
]