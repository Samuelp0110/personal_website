import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow bg-primary'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
