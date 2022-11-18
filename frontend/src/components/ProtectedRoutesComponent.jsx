import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import UserChatComponent from './user/UserChatComponent'

const ProtectedRoutesComponent = ({ admin }) => {
  if (admin) {
    let authAdmin = true
    return authAdmin ? <Outlet /> : <Navigate to={'/login'} />
  } else {
    let authUser = true
    return authUser ? (
      <>
        <UserChatComponent />
        <Outlet />
      </>
    ) : (
      <Navigate to={'/login'} />
    )
  }
}

export default ProtectedRoutesComponent
