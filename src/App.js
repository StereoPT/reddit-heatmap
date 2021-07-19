import styled from 'styled-components';
import NavBar from './Components/NavBar';

function App() {
  return (
    <AppContainer>
      <NavBar/>
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
