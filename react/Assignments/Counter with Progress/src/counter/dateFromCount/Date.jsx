import React from 'react';

const DateComponent = ({ count, setCount }) => {
    const specificDate = new Date();
    const date = specificDate.getDate()
    const setdate = specificDate.setDate(date + count)


    const modifiedDate = specificDate.toDateString()
    console.log(modifiedDate)
    return (
        <div>
            <h1>{count > 0 ? count + " day" : count < 0 ? count + " day" : "Today"}  is  {modifiedDate} </h1>
        </div>
    );
};

export default DateComponent;
