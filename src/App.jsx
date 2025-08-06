import { Route, Routes } from "react-router"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Contacts from "./pages/Contacts"
import Products from "./pages/Products"
import Login from "./pages/Login"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="contacts" element={<Contacts/>} />
        <Route path="products" element={<Products/>} />
        <Route path="login" element={<Login/>} />
        <Route path="cart" element={<Cart/>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
