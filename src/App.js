import './App.css';
import Register from './components/Register';
import { Container, Col, Row } from "react-bootstrap";
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
   
      <Container>

      <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
      <Routes>
    <Route path='/' element={<Register />} />
    <Route path='/login' element={<Login />} />
    </Routes>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>

      </Col>
      </Row>
    </Container>
     
    </>
  );
}

export default App;
