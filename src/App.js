import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Teste from './components/Pages/Teste/Teste';
import Home from './components/Pages/Home/Home';
import Config from './components/Pages/Config/Config';
import EquipmentForm from './components/Pages/EquipmentForm/EquipmentForm';
import Login from './components/Pages/Login/Login';
import ResponsibleForm from './components/Pages/ResponsibleForm/ResponsibleForm';
import MovimentationForm from './components/Pages/MovimentationForm/MovimentationForm';
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
                <EquipmentForm/> 
              </TipoStorage>
            }/>

            <Route path='/equipamentos/:id/edit' element={ 
              <TipoStorage>
                <EquipmentForm/> 
              </TipoStorage>
            }/>

            <Route path='/login' element={ <Login/> } />

            <Route path='/responsaveis/new' element={ 
              <ProtectedRoute>
                <ResponsibleForm/> 
              </ProtectedRoute>} 
            />

            <Route path='/movimentacoes/:id_equipamento/new' element={ 
              <ProtectedRoute> 
                <ZonaStorage>
                  <MovimentationForm/> 
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
