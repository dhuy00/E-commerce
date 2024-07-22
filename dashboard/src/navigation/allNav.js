import { IoHome } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoCloudOfflineSharp } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { IoIosGitPullRequest } from "react-icons/io";

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
    title: 'Payment Requests',
    icon: <MdOutlinePayment />,
    role: 'admin',
    path: '/admin/dashboard/payment-requests'
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
    title: 'Seller Requests',
    icon: <IoIosGitPullRequest />,
    role: 'admin',
    path: '/admin/dashboard/seller-requests'
  },
  {
    id: 8,
    title: 'Chat',
    icon: <BsChatText />,
    role: 'admin',
    path: '/admin/dashboard/chat'
  },
]