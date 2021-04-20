import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Customer from './components/Customer/Customer/Customer';
import OrderForm from './components/Customer/OrderForm/OrderForm';
import AddServices from './components/Admin/AddServices/AddServices';
import Review from './components/Customer/Review/Review';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import NotFound from './components/NotFound/NotFound';
import AllServices from './components/Admin/AllServices/AllServices';
import Sidebar from './components/Shared/Sidebar/Sidebar';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Home/Services/Services';
import Navbar from './components/Home/Navbar/Navbar';
import ManageService from './components/Admin/ManageService/ManageService';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path='/'> <Home /> </Route>

          <Route path='/login'> <Login /> </Route>

          <Route path='/contact'> <Contact /> </Route>

          <Route path='/portfolio'> <Portfolio /> </Route>

          <Route path='/hire'> <Navbar /> <Services /> </Route>

          <PrivateRoute path='/customer/:serviceId'> <Customer /> </PrivateRoute>

          <PrivateRoute path='/order/:orderId'> <OrderForm /> </PrivateRoute>

          <PrivateRoute path='/addService'> <AddServices /> </PrivateRoute>

          <PrivateRoute path='/manageService'> <ManageService /> </PrivateRoute>

          <PrivateRoute path='/review'> <Review /> </PrivateRoute>

          <PrivateRoute path='/makeAdmin'> <MakeAdmin /> </PrivateRoute>

          <PrivateRoute path='/serviceList'> <ServiceList /> </PrivateRoute>

          <PrivateRoute path='/allServices'> <AllServices /> </PrivateRoute>

          <Route path='/allServices'> <AllServices /> </Route>

          <PrivateRoute path='/sidebar'> <Sidebar /> </PrivateRoute>

          <Route path='*'> <NotFound /> </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
