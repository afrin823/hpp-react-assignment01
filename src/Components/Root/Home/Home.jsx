import AllHotel from "../AllHotel/AllHotel";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
           <AllHotel></AllHotel>
            <Footer></Footer>
        </div>
    );
};

export default Home;