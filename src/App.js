import './App.css';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="mainClass">
        <Header/>
        <Experience/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
