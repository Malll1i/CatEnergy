import './App.css';
import './components/css/style.css'
import Headertop from './components/header/header-top';
import HeaderButtom from './components/header/header-buttom';
import MainTop from './components/main/main-top';
import MainButtom from './components/main/main-buttom';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Headertop/>
      <HeaderButtom/>
      <MainTop/>
      <MainButtom/>
      <Footer/>
    </div>
)
}  


export default App;
