import "./App.css";
import { BiBell } from "react-icons/bi";
import User_main from "./adminPanel/admin_main";
import UserIndex from "./UserPanell/userIndex";
function App() {
  return (
    <div className="App">
      {/* <header>
        <nav className="navbar h-16">
          <div className="Logo">
            <p className="">Ticketing App</p>
          </div>
          <div>
            <input
              type="search"
              className="search"
              placeholder="Enter your search"
            />
          </div>
          <div>
            <ul className="routes">
              <li>
                <BiBell />
              </li>

              <li>Help</li>
              <li>Login</li>
              <li>Signup</li>
            </ul>
          </div>
        </nav>
      </header> */}
      {/* <User_main /> */}
      <UserIndex />
    </div>
  );
}

export default App;
