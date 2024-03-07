import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Teste from './components/Pages/Teste/Teste';
import Home from './components/Pages/Home/Home';
import Dashboard from './components/Pages/Dashboard/Dashboard'
import Config from './components/Pages/Config/Config';
import EquipmentForm from './components/Pages/EquipmentForm/EquipmentForm';
import Login from './components/Pages/Login/Login';
import ResponsibleForm from './components/Pages/Responsible/ResponsibleForm';
import MovimentationForm from './components/Pages/MovimentationForm/MovimentationForm';
import { GlobalStorage } from './GlobalContext';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Footer from './components/Footer/Footer';
import Equipment from './components/Pages/Equipment/Equipment';
import { TipoStorage } from './components/Pages/Config/Tipo/TipoContext';
import { ZonaStorage } from './components/Pages/Config/Zona/ZonaContext';
import { setAuthToken } from './components/Helper/setAuthToken';
import NotFound from './components/Pages/NotFound/NotFound';
import ResponsibleTable from './components/Pages/Responsible/ResponsibleTable';
import RouteGuard from './components/middleware/RouteGuard';

function App() {
  const token = localStorage.getItem("token");

  if (token) {
      setAuthToken(token);
  }

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

            <Route exact path='/dashboard' element={<RouteGuard/>}>
              <Route path='/dashboard' element={ <Dashboard/> } />
            </Route>

            <Route exact path='/config' element={<RouteGuard/>}>
              <Route path='/config' element={ 
                <ProtectedRoute> 
                  <Config/> 
                </ProtectedRoute>}
              />
            </Route>

            <Route exact path='/equipamentos/new' element={<RouteGuard/>}>
              <Route path='/equipamentos/new' element={ 
                <TipoStorage>
                  <EquipmentForm/> 
                </TipoStorage>
              }/>
            </Route>

            <Route exact path='/equipamentos/:id/edit' element={<RouteGuard/>}>
              <Route path='/equipamentos/:id/edit' element={ 
                <TipoStorage>
                  <EquipmentForm/> 
                </TipoStorage>
              }/>
            </Route>

            <Route path='/login' element={ <Login/> } />

            <Route exact path='/responsaveis' element={<RouteGuard/>}>
              <Route path='/responsaveis' element={
                <ProtectedRoute>
                  <ResponsibleTable/>
                </ProtectedRoute>
              }/>
            </Route>

            <Route exact path='/responsaveis/new' element={<RouteGuard/>}>
              <Route path='/responsaveis/new' element={ 
                <ProtectedRoute>
                  <ResponsibleForm/> 
                </ProtectedRoute>} 
              />
            </Route>

            <Route exact path='/movimentacoes/:id_equipamento/new' element={<RouteGuard/>}>
              <Route path='/movimentacoes/:id_equipamento/new' element={ 
                <ProtectedRoute> 
                  <ZonaStorage>
                    <MovimentationForm/> 
                  </ZonaStorage>
                </ProtectedRoute> 
              }/>
            </Route>

            <Route exact path='/equipamentos/:id' element={<RouteGuard/>}>
              <Route path='/equipamentos/:id' element={ 
                <ProtectedRoute>
                  <Equipment/>
                </ProtectedRoute>
              }/>
            </Route>

            <Route path='*' element={ <NotFound/> }/>
          </Routes>
          <Footer/>
        </GlobalStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
