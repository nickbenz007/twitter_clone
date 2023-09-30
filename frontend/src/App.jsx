import Header from './components/Header';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <ToastContainer />
        <Routes>
          <Route index={true} path="/" element={<HomeScreen />} />
          <Route index={true} path="/login" element={<SignIn />} />
          <Route index={true} path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
