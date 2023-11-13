import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/Navbarr';
import Header from './components/Header';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';

function App() {
  return (
    <div className="App">
    <Navbarr/>
    <Header/>
    <div className='cards'>
    <Card1/>
    <Card2/>
    <Card3/>
    </div>
    </div>
  );
}

export default App;
