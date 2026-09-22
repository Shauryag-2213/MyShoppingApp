import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Items from "../components/Items";

function PageLayout(){
    return (
        <div>
            <Header/>
            <Navbar/>
            <Items/>
            <Footer/>
        </div>
    )
}
export default PageLayout