import GazCard from "./pages/GazCard";
import { Route, Routes } from "react-router-dom";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import Login from "./pages/Login";
import NonGazCard from "./pages/NonGazCard";
import AppStatus from "./pages/AppStatus";
import UserLogout from "./pages/UserLogout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UserProtectWrapper>
              <Login />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <UserProtectWrapper>
              <Login />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/gaz-card"
          element={
            <UserProtectWrapper>
              <GazCard />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/nongaz-card"
          element={
            <UserProtectWrapper>
              <NonGazCard />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/app-status"
          element={
            <UserProtectWrapper>
              <AppStatus />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
