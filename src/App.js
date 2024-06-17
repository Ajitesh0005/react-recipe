import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/mainpage';
import { MealInfo } from './components/mealinfo';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/:mealid' element={<MealInfo/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
