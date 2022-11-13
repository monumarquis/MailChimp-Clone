import DashBoard from './Dashboard';
import './App.css';
import AdminHome from './AdminHome';
import AddtoProduct from './AddtoProduct';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
     <AllRoutes/>
    </div>
  );
}

export default App;
