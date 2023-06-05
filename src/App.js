import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Teste from './components/Pages/Teste/Teste';
import Home from './components/Pages/Home/Home';
import Config from './components/Pages/Config/Config';
import NewEquipment from './components/Pages/NewEquipment/NewEquipment';
import Login from './components/Pages/Login/Login';
import NewResponsible from './components/Pages/NewResponsible/NewResponsible';
import NewMovimentation from './components/Pages/NewMovimentation/NewMovimentation';
import { GlobalStorage } from './GlobalContext';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Footer from './components/Footer/Footer';
import Equipment from './components/Pages/Equipment/Equipment';
import { TipoStorage } from './components/Pages/Config/Tipo/TipoContext';
import { ZonaStorage } from './components/Pages/Config/Zona/ZonaContext';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <GlobalStorage>
          <Header/>

          <Routes>
            <Route path='/teste' element={ 
              <ProtectedRoute> 
                <Teste/> 
              </ProtectedRoute>} 
            />

            <Route path='/' element={ <Home/> } />

            <Route path='/config' element={ 
              <ProtectedRoute> 
                <Config/> 
              </ProtectedRoute>}
            />

            <Route path='/equipamentos/new' element={ 
              <TipoStorage>
                <NewEquipment/> 
              </TipoStorage>
            }/>

            <Route path='/login' element={ <Login/> } />

            <Route path='/responsaveis/new' element={ 
              <ProtectedRoute>
                <NewResponsible/> 
              </ProtectedRoute>} 
            />

            <Route path='/movimentacoes/:id_equipamento/new' element={ 
              <ProtectedRoute> 
                <ZonaStorage>
                  <NewMovimentation/> 
                </ZonaStorage>
              </ProtectedRoute> 
            }/>

            <Route path='/equipamentos/:id' element={ 
              <ProtectedRoute>
                <Equipment/>
              </ProtectedRoute>
            }/>
          </Routes>
          <Footer/>
        </GlobalStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
