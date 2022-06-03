import {   Payment } from "@mui/icons-material"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Components/Home/Cart"
import { Home } from "../Components/Home/Home"
import { Paymentform } from "../Components/Home/Paymentform"
import { ShirtDetails } from "../Components/ProductDetails/Shirt"
import { TshirtDetails } from "../Components/ProductDetails/Tshirt"
import { Shirt } from "../Components/Products/Shirt"
import { Tshirt } from "../Components/Products/Tshirt"
import {PaymentSuccessful} from "../Components/Home/PaymentSuccessful"

import { Signup } from "../Components/LoginSIgnup/Register"
import { Login } from "../Components/LoginSIgnup/Login"

export const AllRoutes = () => {
    return (
       <Routes>
      
       <Route path ="/signup" element ={<Signup />}/>
            <Route path ="/login" element ={<Login />}/>
            <Route path="/" element = {<Home/>}/>
      <Route path="/tshirt" element = {<Tshirt/>}/>
       <Route path="/shirt" element= {<Shirt/>}/>
      <Route path="/tshirtdetails/:id" element={<TshirtDetails/>}/>
       <Route path="/shirtdetails/:id" element = {<ShirtDetails/>}/>

       <Route path="/cart" element = {<Cart/>}/>
       <Route path="/payment" element= {<Paymentform/>}/>
       <Route path = "/paymentsuccessful" element = {<PaymentSuccessful/>}/>



       
       
       </Routes>
    )
}