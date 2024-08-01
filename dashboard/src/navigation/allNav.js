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
]