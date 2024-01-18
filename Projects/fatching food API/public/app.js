let sidebarItems = document.querySelector("#sidebarItems")
let searchItem = document.getElementById("search");
const searchBtnHandler = document.getElementById("searchBtnHandler");

searchItem.addEventListener("input", function () {
    if (searchItem.value !== "") {
        searchBtnHandler.disabled = false;
    } else {
        searchBtnHandler.disabled = true;
    }
});

searchBtnHandler.addEventListener("submit", () => {
    alert("working")
})
async function searchHandler() {
    var loader = document.getElementById("loader");
    sidebarItems.innerHTML = ""
    loader.style.display = "block";
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem.value}`)

    try {

        loader.style.display = "none"
        const resInJson = await res.json()
        loader.style.display = "none";
        resInJson.data.recipes.find(v => {
        })
        var simplify = resInJson.data.recipes;
        if (simplify.length === 0) {
            sidebarItems.innerHTML = `<div class="notFound"><i class="uil uil-exclamation-triangle"></i>  &nbsp;<span> No recipes found for your query! Please try again ;)</span></div>`
        }
        for (var i = 0; i <= resInJson.data.recipes.length; i++) {
            let imageUrl = resInJson.data.recipes[i].image_url;
            let bottomTittle = resInJson.data.recipes[i].publisher
            let itemsId = resInJson.data.recipes[i].id
            let titlle = resInJson.data.recipes[i].title
            let displayRecipes =
                `<div class="sideBarMenu" onclick="clickOnItem('${itemsId}')">
            <div class="sidebarImageDiv">
            <img src="${imageUrl}" alt="Cauliflower Pizza Crust (with BBQ Chicken Pizza)">
            </div>
            <div>
            <h4>${titlle}</h4>
            <P>${bottomTittle}</P>
            </div>
            </div>
            `
            sidebarItems.innerHTML += displayRecipes
        }

    } catch (error) {
        loader.style.display = "none";
    }
    finally {
        loader.style.display = "none"
    }

}


searchItem.value = ""
let center_contentHTML = document.querySelector("#center-content");
let timer = document.querySelector("#time");
let services = document.querySelector("#services")
let ingredientsDiv = document.querySelector("#ingredients")
let plusAndMinus = document.querySelector("#plusAndMinus")
let bookMark = document.querySelector("#bookMark")
let recipesHeading = document.querySelector("#recipesHeading");
let howtocook = document.querySelector("#howtocook")
const clickOnItem = (e) => {
    var secondLoader = document.getElementById("secondLoader");
    ingredientsDiv.innerHTML = "";
    center_contentHTML.innerHTML = "";
    plusAndMinus.innerHTML = "";
    bookMark.innerHTML = "";
    recipesHeading.innerHTML = "";
    howtocook.innerHTML = "";
    timer.innerHTML = "";
    services.innerHTML = ""
    secondLoader.style.display = "block";
    const fetchingSpecificData = async () => {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`)
            const resInJson = await res.json()
            loader.style.display = "none"
            plusAndMinus.innerHTML = `<i class="uil uil-minus-circle"></i><i class="uil uil-plus-circle"></i>`
            bookMark.innerHTML = `<i class="uil uil-bookmark"></i>`
            recipesHeading.innerHTML = "RECIPE INGREDIENTS";
            howtocook.innerHTML = `<h3>HOW TO COOK IT</h3>
            <p>This recipe was carefully designed and tested by Closet Cooking. Please <br> check out
                directions at their website.</p>
            <button>DIRECTIONS</button>`

            let centerContent = `<img class="clickedImage" src="${resInJson.data.recipe.image_url}" alt="">
                     <h1 class="imageDetialer">
                         <span>${resInJson.data.recipe.title}</span>
                     </h1>`
            center_contentHTML.innerHTML = centerContent;
            timer.innerHTML = `<i class="uil uil-clock"></i> ${resInJson.data.recipe.cooking_time} MINUTES`
            services.innerHTML = `<i class="uil uil-users-alt"></i> ${resInJson.data.recipe.servings} SERVINGS`;
            let ingredientsLenght = resInJson.data.recipe.ingredients.length;
            for (var i = 0; i < ingredientsLenght; i++) {
                let desc = resInJson.data.recipe.ingredients[i].description;
                let quant = resInJson.data.recipe.ingredients[i]?.quantity;

                let ingredientsdisplay = `<div class="ingredientsitems">
                <div class="ingregientInnerDiv">
                <div class="check" style="font-size: 35px;"><i class="uil uil-check"></i></div>
                <div class="ingredientsitemschild"><p>${quant} ${desc}</p></div>
            </div>
            </div>`
                ingredientsDiv.innerHTML += ingredientsdisplay
            }

        } catch (error) {
            secondLoader.style.display = "none";
        }
        finally {
            secondLoader.style.display = "none"
        }
    }
    fetchingSpecificData()
}























// let searchBtnHandler = document.querySelector("#searchBtnHandler");
// searchBtnHandler.disabled = true
// if (searchItem.value !== "") {
//     searchBtnHandler.disabled = false
// }

// var loader = document.getElementById("loader")
// const searchHandler = async () => {
//     console.log("working...")
//     loader.style.display = "block"
//     try {
//         const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem.value}`)
//         console.log(response.data.recipes)
//         var simplify = response.data.recipes;
//         if (simplify == []) {
//             alert("this name is product does not found!")
//         }
//         simplify.map((item) => {
//             let displayRecipes =
//                 `<div class="sideBarMenu" onclick="clickOnItem('${item.itemsId}')">
//                         <div class="sidebarImageDiv">
//                         <img src="${imageUrl}" alt="Cauliflower Pizza Crust (with BBQ Chicken Pizza)">
//                         </div>
//                         <div>
//                         <h4>${item.titlle}</h4>
//                         <P>${item.bottomTittle}</P>
//                         </div>
//                         </div>
//                         `
//             sidebarItems.innerHTML += displayRecipes
//         })
//     } catch (error) {
//         console.log(error)
//         searchItem.value = ""
//         loader.style.display = "none"
//         alert(error.message)
//     }
//     finally {
//         searchItem.value = ""
//         loader.style.display = "none"
//     }
// }