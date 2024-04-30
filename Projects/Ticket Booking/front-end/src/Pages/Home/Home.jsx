import Featured from "../../Components/featured/Featured"
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MailList from "../../Components/mainList/MailList"
import Navbar from "../../Components/Navbar/Navbar"
import PropertyList from "../../Components/PropertyList/PropertyList"
import "./home.css"

export default function Home() {
    return (
        <div>

            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}
