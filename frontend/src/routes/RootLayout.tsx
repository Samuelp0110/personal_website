import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-rbg'>
      <Navbar />
      <main className='flex-grow '>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
