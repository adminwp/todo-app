import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todos from './components/Todos';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Todos />} path='/' />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
