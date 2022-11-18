import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// public page
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductListPage from './pages/ProductListPage'
import RegisterPage from './pages/RegisterPage'
// protected User Page
import UserProfilePage from './pages/user/UserProfilePage'
import UserOrdersPage from './pages/user/UserOrdersPage'
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage'
import UserCartDetailsPage from './pages/user/UserCartDetailsPage'
// protected Admin Page
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage'
import AdminChatsPage from './pages/admin/AdminChatsPage'
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage'
import AdminEditProductPage from './pages/admin/AdminEditProductPage'
import AdminEditUserPage from './pages/admin/AdminEditUserPage'
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'
// components
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
// components User
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent'

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        {/* user protected routes */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
        </Route>
        {/* user protected routes */}

        {/* admin protected routes */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route
            path="/admin/create-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
        </Route>
        {/* admin protected routes */}

        <Route path="/*" element="Page is not exist" />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
