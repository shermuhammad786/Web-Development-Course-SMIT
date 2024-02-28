import './App.css'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Select from 'react-select'


function App() {
  const [fromCountry, setFromCountry] = useState("USD")
  const [toCountry, setToCountry] = useState("PKR")
  const [currency, setCurrency] = useState(1)
  const [countries, setCountries] = useState("")
  const [settings, setSettings] = useState(false)
  const [getData, setGetData] = useState("")
  const [displayData, setDisplayData] = useState("")
  const [displayCurrency, setDisplayCurrency] = useState(false)

  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      const data = await response.json();
      setGetData(data.rates)
      const mappingData = Object.keys(data.rates)
      // console.log(mappingData, "mappignd ata")
      setCountries(mappingData)
      setSettings(true)
    }
    fetchingData()
  }, [])
  const convertHandler = async () => {
    setDisplayCurrency(true)
    setDisplayData(getData[toCountry] / getData[fromCountry] * currency)
  }
  const options = settings && countries.map((single) => ({ value: single, label: single }));
  return (
    <>
      <div className='flex flex-col items-center justify-center border-8 w-full h-screen gap-4'>
        <div>
          <h1>CURRENCY CONVERTOR </h1>
        </div>

        <div>
          <label className="relative block ">
            <input onChange={(e) => setCurrency(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Currency..." type="number" name="search" />
          </label>
        </div>

        <div className='w-11/12 items-center justify-center flex'>


          <div className='flex justify-between items-center w-2/4'>

            <h1>FROM</h1>

            <Select
              options={options}
              onChange={(selectedOption) => setFromCountry(selectedOption.value)}
              styles={{
                control: (styles) => ({ ...styles, maxHeight: '140px' }),
              }}
            />

            <h1>TO</h1>

            <Select
              options={options}
              onChange={(selectedOption) => setToCountry(selectedOption.value)}
              styles={{
                control: (styles) => ({ ...styles, maxHeight: '140px' }),
              }}
            />
            <Button onClick={convertHandler} variant="contained">convert</Button>
          </div>
        </div>
        <h1
          style={{
            padding: "10px", color: "green", fontSize: "30px", fontFamily: "cursive"
          }}
        > {displayCurrency && `Converted Amount ` + Number(displayData).toFixed(2)}</h1>

      </div>
    </>
  )
}

export default App
