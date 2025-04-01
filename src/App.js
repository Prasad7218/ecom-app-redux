import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store'
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
