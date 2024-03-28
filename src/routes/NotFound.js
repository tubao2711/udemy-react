import Alert from "react-bootstrap/Alert";

const NotFound = () => {
  return (
    <>
      {" "}
      <Alert variant="success" className="text-center">
        <Alert.Heading>404 Not Found</Alert.Heading>
        <p>This page is not exist!</p>
        <div className="d-flex justify-content-end"></div>
      </Alert>
    </>
  );
};

export default NotFound;
