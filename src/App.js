import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Teste from './components/Pages/Teste/Teste';
import Home from './components/Pages/Home/Home';
import Config from './components/Pages/Config/Config';
import NewEquipment from './components/Pages/NewEquipment/NewEquipment';
import Login from './components/Pages/Login/Login';
import NewResponsible from './components/Pages/NewResponsible/NewResponsible';
import NewMovimentatio from './components/Pages/NewMovimentation/NewMovimentation';
import { GlobalStorage } from './GlobalContext';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Footer from './components/Footer/Footer';
import Equipment from './components/Pages/Equipment/Equipment';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <GlobalStorage>
          <Header/>
          <Routes>
            <Route path='/teste' element={ <ProtectedRoute> <Teste/> </ProtectedRoute>} />
            <Route path='/' element={ <Home/> } />
            <Route path='/config' element={ <ProtectedRoute> <Config/> </ProtectedRoute>} />
            <Route path='/equipamentos/new' element={ <ProtectedRoute> <NewEquipment/> </ProtectedRoute>} />
            <Route path='/login' element={ <Login/> } />
            <Route path='/responsaveis/new' element={ <ProtectedRoute> <NewResponsible/> </ProtectedRoute>} />
            <Route path='/movimentacoes/new' element={ <NewMovimentatio/> } />
            <Route path='/equipamentos/:id' element={ <Equipment/> } />
          </Routes>
          <Footer/>
        </GlobalStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
