import './App.css';
import Home from './home';
import SeatBook from './seatBooking';
import BusList from './buslist';
import { UserProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProviders } from './UserContext';
import Train from './train';
import Flight from './Flight';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import HomeComponent from './HomeComponent';
import CRUDOperationsComponent from './CRUDOperationsComponent';
import CRUDAddUser from './CRUDAddUser';
import CRUDUpdateUser from './CRUDUpdateUser';
import BusDetails from './BookingDetails';

function App() {
  return (
    <UserProviders>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/hc" element={<HomeComponent />} />
            <Route path="/home" element={<Home />} />
            <Route path="/train" element={<Train />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/busList" element={<BusList />} />
            <Route path="/seatBook" element={<SeatBook />} />
            <Route path="/crud" element={<CRUDOperationsComponent />} />
            <Route path="/adduser" element={<CRUDAddUser />} />
            <Route path="/updateuser" element={<CRUDUpdateUser />} />
            <Route path="/bookingdetails" element={<BusDetails />} /> {/* Add route for BusDetails */}
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </UserProviders>
  );
}

export default App;
