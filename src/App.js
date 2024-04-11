import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserListPage from './pages/UserListPage/UserListPage';
import TodoPage from './pages/TodoPage/TodoPage';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.sass';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<UserListPage />} />
        <Route path='todo' element={<TodoPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
