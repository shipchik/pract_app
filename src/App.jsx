import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    
      
    <div className={style.app_wraper}>
      <Header />
      <Navbar />

      <div className={style.content}>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer/>} />
          <Route path="/profile" element={<Profile/> } />

        </Routes>
       
        
      </div>
    </div>
  
  );
}

export default App;
