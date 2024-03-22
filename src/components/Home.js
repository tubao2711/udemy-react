import logoApp from "../assets/images/logo192.png";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <img
          src={logoApp}
          width="300"
          height="300"
          className="d-inline-block align-top"
          alt="React logo"
        />
        <h1>Welcome to my Manage User App</h1>
        Visit page <b>Manage User</b> to see detail!
      </div>
    </>
  );
};

export default Home;
