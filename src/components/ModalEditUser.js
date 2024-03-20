import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { updateUser } from "../services/userService";
import { toast } from "react-toastify";

const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit, hanldeEditUserFromModal } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleEditUser = async () => {
    let res = await updateUser(dataUserEdit.id, name, job);
    if (res && res.updatedAt) {
      hanldeEditUserFromModal({
        first_name: name,
        id: dataUserEdit.id,
      });
      handleClose();
      toast.success("Update user succeed");
    }
  };

  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
    }
  }, [dataUserEdit]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input
                onChange={(event) => setJob(event.target.value)}
                value={job}
                type="text"
                className="form-control"
              />
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditUser}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditUser;
