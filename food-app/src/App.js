import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import ListOfProducts from './pages/ListOfProducts';
import { GlobalStyles } from './Styles/GlobalStyles';
function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/listOfProducts' element={<ListOfProducts/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
