import { Outlet } from "react-router";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
// import N8nChatbot from "../components/N8nChatbot";

const RootLayout = () => {
  
  return (
    <div className='min-h-screen flex flex-col bg-rbg font-roboto'>
      <Navbar />
      <main className='flex-grow '>
        <Outlet />
        {/* <N8nChatbot /> */}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
