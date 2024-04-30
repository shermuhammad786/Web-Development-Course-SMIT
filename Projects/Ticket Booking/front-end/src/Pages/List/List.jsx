import { useLocation } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import "./list.css"
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useState } from "react";
import SearchItem from "../../Components/SearchItems/SearchItem";

export default function List() {
  const { state } = useLocation()
  const [date, setDate] = useState(state.date)
  const [dateOpen, setDateOpen] = useState(false)

  const [destination, setDestination] = useState(state.destination)
  const [option, setOption] = useState(state.option)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destinaiton</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setDateOpen(!dateOpen)}>{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
              {dateOpen && <DateRange onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date} className="lsDate" />}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionsItem">
                  <span className="lsOptionText">Min Price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>


                <div className="lsOptionsItem">
                  <span className="lsOptionText">Max Price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />

                </div>


                <div className="lsOptionsItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={option.adults} />

                </div>


                <div className="lsOptionsItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={option.children} />

                </div>


                <div className="lsOptionsItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={option.room} />
                </div>

              </div>
            </div>
            <button>Search</button>


          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>

        </div>
      </div>
    </div >
  )
}
