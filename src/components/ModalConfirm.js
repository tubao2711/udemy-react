import { Modal, Button } from "react-bootstrap";
import { deleteUser } from "../services/userService";
import { toast } from "react-toastify";
const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteFromModal } = props;

  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete user succeed");
      handleClose();
      handleDeleteFromModal(dataUserDelete);
    } else {
      toast.error("error delete user");
    }
    console.log("check res:", res);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete a user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Modal-body">
          This action can't be undone! Do you want to delete this user?
          <br />
          <b>email = {dataUserDelete.email}</b>
          <br />
          <b>name = {dataUserDelete.first_name}</b>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => confirmDelete()}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
