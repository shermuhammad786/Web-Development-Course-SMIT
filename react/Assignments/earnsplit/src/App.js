import { useState } from 'react';
import './App.css';
import AddFriend from './Components/AddFriend/AddFriend';
import Friends from './Components/Friends/Friends';
import SplitBill from './Components/SplitBill/SplitBill';

function App() {
  const [friends, setFriends] = useState([
    {
      name: "friend 1",
      imageSrc: "https://pics.craiyon.com/2023-07-04/8a9f804bdf9f4be29a02477c18c828c1.webp",
      money: 0,
    },
    {
      name: "friend 2",
      imageSrc: "https://pics.craiyon.com/2023-07-04/8a9f804bdf9f4be29a02477c18c828c1.webp",
      money: 0,
    },
    {
      name: "friend 3",
      imageSrc: "https://pics.craiyon.com/2023-07-04/8a9f804bdf9f4be29a02477c18c828c1.webp",
      money: 0,
    },
    {
      name: "friend 4",
      imageSrc: "https://pics.craiyon.com/2023-07-04/8a9f804bdf9f4be29a02477c18c828c1.webp",
      money: 0,
    },

  ])
  const [addNewFriend, setAddNewFriend] = useState(false)
  const [selectFrnd, setSelectFrnd] = useState(true)
  const [splitBillWithFriend, setSplitBillWithFriend] = useState({});



  const addingFriend = () => {
    addNewFriend === false ? setAddNewFriend(true) : setAddNewFriend(false);
  }
  return (
    <div className='dflex'>
      <div className='leftContainer'>

        {/* firneds.jsx component */}
        <Friends
          AddFriend={<AddFriend />}
          friends={friends}
          setFriends={setFriends}
          addNewFriend={addNewFriend}
          setAddNewFriend={setAddNewFriend}
          selectFrnd={selectFrnd}
          setSelectFrnd={setSelectFrnd}
          setSplitBillWithFriend={setSplitBillWithFriend}
        />

        {/* AddFriend.jsx component */}
        {addNewFriend && <AddFriend
          friends={friends}
          setFriends={setFriends}
          addNewFriend={addNewFriend}
          setAddNewFriend={setAddNewFriend}

        />}

        <button className='btns addFrnd' onClick={addingFriend}>{!addNewFriend ? "Add friend" : "Close"}</button>

      </div>

      <div className='border rightContainer'>

        {/* SplitBill.jsx component */}
        {!selectFrnd && <SplitBill
          friends={friends}
          splitBillWithFriend={splitBillWithFriend}
          setSplitBillWithFriend={setSplitBillWithFriend}
          setFriends={setFriends}
          setSelectFrnd={setSelectFrnd}
          selectFrnd={selectFrnd}
        />}
      </div>

    </div>
  );
}

export default App;
