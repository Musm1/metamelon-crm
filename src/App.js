import Register from "./pages/Authentication/register";
import SignIn from "./pages/Authentication/signIn";
import Thankyou from "./pages/thankyou";

function App() {
  return (
    <div>
      {/* <Login/> */}
      <SignIn/>
      <Register />
      <Thankyou/>
    </div>
  );
}

export default App;
