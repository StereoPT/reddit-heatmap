import styled from 'styled-components';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom' 
import Home from './Components/Home';
import Search from './Components/Search';
import AboutUs from './Components/AboutUs';
import HowItWorks from './Components/HowItWorks';
import Contacts from './Components/Contacts';

function App() {
  return (
    <AppContainer>
      <NavBar/>
      <div className="h-full">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/howitworks" component={HowItWorks}/>
          <Route path="/contacts" component={Contacts}/>
        </Switch>
      </div>
      <Footer/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  //width: 1440px;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
`;

export default App;
