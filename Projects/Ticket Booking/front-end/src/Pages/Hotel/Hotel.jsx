import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../Components/mainList/MailList"
import Footer from "../../Components/Footer/Footer"
import { useState } from "react"

export default function Hotel() {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/87428762.jpg?k=3f7ea7636b2689409ba55ce84f1b3c8921054cbeaebc747a517f1b2caead7a31&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/104961742.jpg?k=6357607fe5b14be49eb7352fd6e1914cd2a70d8e0f0f8cb855a464255af5715c&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106201924.jpg?k=acd23840c73d411bfddfd6dd83e640dbead3590b27ea8878d995b4e50f39b813&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261708852.jpg?k=f5b35da69bc91589157cefb32b5c1bb1c1051f0b8facf7dc4cc67a2c8e883201&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/87429281.jpg?k=e915fe4512dd3454807da36229cacd79075e52f86ac2c3a8164e95ba9c712f65&o=&hp=1"
        },
    ]


    const sliderHandler = (index) => {
        setSlideNumber(index)
        setOpen(true)
    }
    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === "left") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} onClick={() => handleMove("left")} className="arrow" />
                    <div className="sliderWrapper">
                        <img className="sliderImg" src={photos[slideNumber].src} alt="" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} onClick={() => handleMove("right")} className="arrow" />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or   Book now</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton st 123 New York</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighLight">Book a stay over $114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => sliderHandler(index)} className="hotelImg" src={photo.src} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the heart of Krakow </h1>
                            <p className="hotelDesc">
                                You're eligible for a Genius discount at Tower Street Apartments! To save at this property, all you have to do is sign in.
                                Tower Street Apartments enjoys a location in Krakow, a 12-minute walk from Krakow Central Station and half a mile from Galeria Krakowska. The property is close to St. Florian's Gate, Wawel Royal Castle, and Lost Souls Alley. The property is 500 yards from the city center and a 16-minute walk from National Museum of Krakow.
                            </p>
                        </div>
                        <div className="hoteDetailPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8  !</span>

                            <h2><b>$945</b> (9 nights)</h2>
                            <button>Reverse or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <br /><br />
                <Footer />
            </div>
        </div>
    )
}
