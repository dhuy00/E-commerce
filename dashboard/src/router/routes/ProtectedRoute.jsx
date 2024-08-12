import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ route, children }) => {
  const role = useSelector(state => state.auth.role);
  const userStatus = useSelector(state => state.auth.userInfo.status);

  if (userStatus === undefined) {
    return null;
  }

  if (role) {
    if (role === route.role) {
      // console.log(role);
      // if (route.status.includes(userStatus) || role === "admin") {
        return <Suspense fallback={null}>{children}</Suspense>;
      // } else {
      //   if (userStatus?.toUpperCase() === 'PENDING') {
      //     console.log('account pending');
      //     return <Navigate to="/seller/account-pending" />;
      //   } else {
      //     console.log('account deactive', userStatus);
      //     return <Navigate to="/seller/account-deactive" />;
      //   }
      // }
    } else {
      console.log('route role', route.role);
      return <Navigate to="/unauthorized" />;
    }
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
