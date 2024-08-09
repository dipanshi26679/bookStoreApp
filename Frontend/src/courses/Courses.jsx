import NavBar from "../components/NavBar";
import Course from "../components/Course";
import Footer from "../components/Footer";

// console.log(list);
function Courses() {
  return (
    <>
      <NavBar />
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
