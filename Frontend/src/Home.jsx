import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from "./components/FreeBook";
import NavBar from "./components/NavBar";




function Home() {
  return (
    <div>
        <NavBar />
      <Banner/>
      <FreeBook/>
      <Footer/>
    </div>
  )
}

export default Home