import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Viewuser from './components/Viewuser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Viewuser/>}/>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
