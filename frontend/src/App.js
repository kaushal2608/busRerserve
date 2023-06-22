import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import './App.css';
import AvailableTrips from './Pages/AvailableTrips/AvailableTrips';
import UserDetails from './Pages/UserDetails/UserDetails';
import TicketsBooked from './Pages/TicketsBooked/TicketsBooked';
import Contact from './Pages/Contact/Contact';
import MyTickets from './Pages/MyTickets/MyTickets';

function App() {
  return (
   <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detailfilling" element={<UserDetails />} />
          <Route path="/Available-trips" element={<AvailableTrips />} />
          <Route path="/ticketbooked" element={<TicketsBooked />} />
          <Route path='/mytickets' element={<MyTickets />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
