import { NavLink, Route, Routes } from "react-router-dom";
import AutomaticBatching from "./components/AutomaticBatching";
import UseTransition from "./components/UseTransition";
import LoadingSuspense from "./components/LoadingSuspense";

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
        <li>
          <NavLink to={route.suspense}>Suspense</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path={route.automaticBatching} element={<AutomaticBatching />} />
        <Route path={route.useTransition} element={<UseTransition />} />
        <Route path={route.suspense} element={<LoadingSuspense />} />
      </Routes>
    </>
  );
}

export default App;

const route = {
  automaticBatching: "/automaticBatching",
  useTransition: "/useTransition",
  suspense: "/suspense",
};
