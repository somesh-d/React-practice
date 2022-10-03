import "./App.css";
import Register from "./components/Register";
import { Container, Col, Row } from "react-bootstrap";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Auth from "./components/Auth";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/free" element={<Protected/>} />
             
             <Route path="/auth/" element={<ProtectedRoutes element={<Auth/>} />} />
             {/* <Route path="/pro" element={<ProtectedRoutes/>}/> */}
            
            </Routes>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
