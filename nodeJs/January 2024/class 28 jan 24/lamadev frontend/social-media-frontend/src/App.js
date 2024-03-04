// import { SignUp } from "./singup/singup";
import "./app.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { SignUp } from "./Pages/SignUpPage/SignUp";
import { Login } from "./Pages/LoginPage/Login";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <HomePage /> */}
      {/* <ProfilePage /> */}
      {/* <SignUp /> */}
      <Login />
    </div>
  );
}

export default App;
