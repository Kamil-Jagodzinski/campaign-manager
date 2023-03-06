import '../src/styles/App.css';
import HeaderBar from './components/header/HeaderBar'
import AppContent from './components/AppContent'
import {useState} from 'react'

import Campaigns from './data/Campaigns'
import Products from './data/Products'


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectedForm, setForm] = useState( 0 )
  const [user, setUser] = useState( '' )

  const [Campaigns_db, setCampaigns_db] = useState( Campaigns )
  const [Products_db, setProducts_db] = useState( Products )

  return (
    <div id="App">
      <HeaderBar  isLoggedIn={isLoggedIn} setForm={setForm}
                  user={user} setUser={setUser} 
                  setLoggedIn={setLoggedIn} />

      <AppContent setLoggedIn={setLoggedIn}     isLoggedIn={isLoggedIn}
                  selectedForm={selectedForm}   setForm={setForm} setUser={setUser}
                  Campaigns_db = {Campaigns_db} setCampaigns_db={setCampaigns_db}
                  Products_db = {Products_db}   setProducts_db={setProducts_db}/>
    </div>
  );
}

export default App;
