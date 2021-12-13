import './App.css';
import Navbar from './components/navbar/Navbar';
import NewInvoice from './components/sectionOne/NewInvoice';
import SideNav from './components/sideNav/SideNav';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Navbar />
      <NewInvoice />
    </div>
  );
}

export default App;
