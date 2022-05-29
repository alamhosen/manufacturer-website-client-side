
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import SignUp from './components/Login/SignUp';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddAReview from './components/Dashboard/AddAReview';
import MyProfile from './components/Dashboard/MyProfile';
import UpdateProfile from './components/Dashboard/UpdateProfile';
import Users from './components/Dashboard/Users';
import RequireAdmin from './components/Login/RequireAdmin';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProducts from './components/Dashboard/ManageProducts';
import RequireUser from './components/Login/RequireUser';
import Payment from './components/Dashboard/Payment';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/purchase/:productId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
          <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myorders' element={<RequireUser><MyOrders></MyOrders></RequireUser>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='addreview' element={<RequireUser><AddAReview></AddAReview></RequireUser>}></Route>
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path='manageorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
            <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path='manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          </Route>
          <Route path='updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
