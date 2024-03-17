import { Container, Modal } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUser";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModal, setShowModal] = useState(false);
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 d-flex justify-content-between">
          <span>
            <h5>
              <b>List user:</b>
            </h5>
          </span>
          <button
            className="btn btn-success"
            onClick={() => setShowModal(true)}
          >
            Add New User
          </button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNew show={isShowModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
