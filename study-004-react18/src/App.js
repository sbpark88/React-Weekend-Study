import { NavLink, Route, Routes } from "react-router-dom";
import AutomaticBatching from "./components/AutomaticBatching";
import UseTransition from "./components/UseTransition";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={route.automaticBatching}>Automatic Batching</NavLink>
        </li>
        <li>
          <NavLink to={route.useTransition}>Use Transition</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path={route.automaticBatching} element={<AutomaticBatching />} />
        <Route path={route.useTransition} element={<UseTransition />} />
      </Routes>
    </>
  );
}

export default App;

const route = {
  automaticBatching: "/automaticBatching",
  useTransition: "/useTransition",
};
