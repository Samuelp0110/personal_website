import Button from "../components/Button";

const Home = () => {
  const handleClick = () => {
    alert("Button was clicked!");
  };
  return (
    <div>
      <h1 className='text-xl mb-4'>Welcome to the Home Page</h1>
      <div>
        <Button
          onClick={handleClick}
          className='bg-background'
        >
          Let's Connect!
        </Button>
      </div>
    </div>
  );
};

export default Home;
