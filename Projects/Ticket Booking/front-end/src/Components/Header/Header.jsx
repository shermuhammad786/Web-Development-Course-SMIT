import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useNavigate } from "react-router-dom";
export default function Header({ type }) {

    const [openDate, setOpenDate] = useState(false)
    const [openOption, setOpenOption] = useState(false)
    const [destination, setDestination] = useState("")
    const [option, setOption] = useState({
        adults: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOption(prev => {
            return {
                ...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1
            }
        })
    }

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const navigate = useNavigate()
    const searchHandler = () => {
        navigate("/hotels", { state: { destination, date, option } })
    }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">

                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>cars</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxies</span>
                    </div>
                </div>

                {type !== "list" && <>
                    <h1 className="headerTile">A lifetime of discoutns? it's Genius.</h1>
                    <p className="headerDesc">Get Reward for your travels - unlock instant savings of 10% or more with a free booking account</p>
                    <button className="headerBtn">Sign in / Register</button>


                    <div className="headerSearch">
                        <div className="haederSearchItems">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input onChange={e => setDestination(e.target.value)} type="text" placeholder="Where are you going" className="headersearchInput" />
                        </div>
                        <div className="haederSearchItems">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`} </span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                            />}
                        </div>


                        <div className="haederSearchItems">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                            <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${option.adults} Adult ${option.children} Childern ${option.room} Rooms`}</span>

                            {openOption && <div className="options">
                                <div className="optionItems">
                                    <span className="optionText">Adult</span>
                                    <div className="counter">
                                        <button disabled={option.adults <= 1} className="optionCounterBtn" onClick={() => handleOption("adults", "d")}>-</button>
                                        <span className="optionCounterNumber">{option.adults}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("adults", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItems">
                                    <span className="optionText">Children</span>
                                    <div className="counter">
                                        <button disabled={option.children <= 0} className="optionCounterBtn" onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{option.children}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItems">
                                    <span className="optionText">Rooms</span>

                                    <div className="counter">
                                        <button disabled={option.room <= 1} className="optionCounterBtn" onClick={() => handleOption("room", "d")}>-</button>
                                        <span className="optionCounterNumber">{option.room}</span>
                                        <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>

                        <div className="haederSearchItems">
                            <button onClick={searchHandler} className="headerBtn">Search</button>
                        </div>
                    </div>
                </>}
            </div>


        </div>
    )
}
