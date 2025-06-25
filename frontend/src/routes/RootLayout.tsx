import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow p-4'>
        <Outlet />
      </main>
      <footer className='bg-secondary p-4 text-center'>
        Footer (Placeholder)
      </footer>
    </div>
  );
};

export default RootLayout;
