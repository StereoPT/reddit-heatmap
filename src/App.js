import styled from 'styled-components';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Search from './Pages/Search';

function App() {
  return (
    <AppContainer>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
      </Switch>
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
