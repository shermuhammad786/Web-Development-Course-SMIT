import mongoose from "mongoose"


const DBConnection = () => {
    mongoose.connect("mongodb+srv://hafiz786:videosharingsecondProject@cluster0.9tohlre.mongodb.net/").then(() => {
        console.log("DB Connected")
    }).catch((err) => {
        console.log(err, "====>>>>>>..   error")
    })
}
export default DBConnection
// videosharingsecondProject