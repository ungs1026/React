import './App.css';
import Nav from './components/Nav';

// Routes for Page
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import { Outlet, Route, Routes } from 'react-router-dom';

const Layout = () => {
	return (
		<div>
			<Nav />

			<Outlet />
		</div>
	)
}

function App() {
  return (
    <div className='app'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<LoginPage />}/>
					<Route path='main' element={<MainPage />}/>
					<Route path=':movieId' element={<DetailPage />}/>
					<Route path='search' element={<SearchPage />}/>
				</Route>
			</Routes>
		</div>
  )
}

export default App;