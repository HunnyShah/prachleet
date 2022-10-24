import './App.css';
import Watch from './Routes/Watch';
import Header from './Components/Header';
import Description from './Routes/Description';
import Wishlist from './Routes/Wishlist';
// import Register
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <header className="App-header"> */}
        {/* </> */}
        <Header />
        <Routes>
          <Route path='/watch' element={<Watch />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/description/:id' element={<Description />}/>
        </Routes>
      {/* </header> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
