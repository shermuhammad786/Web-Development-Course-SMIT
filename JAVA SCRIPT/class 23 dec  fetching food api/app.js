const get3Countries  = async function (c1,c2,c3){
    try{
        const [data1] = await  getJSON(
            `https://restcountries.com/v3.1/name/${c1}`
        );
        const [data2] = await  getJSON(
            `https://restcountries.com/v3.1/name/${c2}`
        );
        const [data3] = await  getJSON(
            `https://restcountries.com/v3.1/name/${c3}`
        );

        Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`),
        ])
        
        console.log(data1,data2,data3);
    }
    catch(err){
        console.log(err)
    }
// let git = fetch("https://restcountries.com/v3.1/name/pakistlan")
// .then(res)
// .catch(err)
}
get3Countries("pakistan","india","turkey")