import Register from "./pages/Authentication/register";
import SignIn from "./pages/Authentication/signIn";
import Thankyou from "./pages/thankyou";
import Dashboard2 from "./pages/dashboard2";

function App() {
  return (
    <div>
      {/* <Login/> */}
      <SignIn/>
      <Register />
      <Thankyou/>
      <Dashboard2 />
    </div>
  );
}

export default App;
