import './App.css';
import Sidebar from './component/Sidebar';
import AnalyticsScreen from './Screen/AnalyticsScreen';
import Homepage from './Screen/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TradingScreen from './Screen/TradingScreen';
import NotificationScreen from './Screen/NotificationScreen';
import LoginScreen from './Screen/LoginScreen';
import { useAuth } from './firebase';

function App() {
  let user = useAuth();
  console.log(user);

  return (
    <div className="app">
      <Router>
        {(!user) ? (
          <LoginScreen />
        ) : (
          <>
            <Sidebar />
            <Routes>
              <Route path="/dashboard" exact element={<Homepage />}></Route>
              <Route path="/analytics" exact element={<AnalyticsScreen />}></Route>
              <Route path="/trading" exact element={<TradingScreen />}></Route>
              <Route path="/notification" exact element={<NotificationScreen />}></Route>
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
