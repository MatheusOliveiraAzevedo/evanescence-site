
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import Albuns from './pages/Albuns';
import Sobre from './pages/Sobre';
import OndeEncontrar from './pages/OndeEncontrar';
import Tracks from './pages/Tracks';
import { useState } from 'react';
import Membros from './pages/Membros';
import Agenda from './pages/Agenda';


function App() {

  const [albumSelecionado, setAlbumSelecionado] = useState("");
  const [imagemAlbum, setImagemAlbum] = useState("")

  function tracks(valor) {
    setAlbumSelecionado(valor)
  }


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}>
            <Route path='/' element={<Agenda></Agenda>}></Route>
            <Route path='/Sobre' element={<Sobre></Sobre>}></Route>
            <Route path='/albuns' element={<Albuns alterar={tracks}></Albuns>}></Route>
            <Route path='onde-encontrar/' element={<OndeEncontrar></OndeEncontrar>}></Route>
            <Route path='/tracks' element={<Tracks trackAlbum={albumSelecionado}></Tracks>}></Route>
            <Route path='/membros' element={<Membros></Membros>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
