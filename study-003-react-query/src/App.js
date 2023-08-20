import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserInfo from "./components/UserInfo";
import UserAddress from "./components/UserAddress";
import Menu from "./components/common/Menu";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import UserUpdate from "./components/UserUpdate";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Menu />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<UserInfo />} />
          <Route path="/address" element={<UserAddress />} />
          <Route path="/userUpdate" element={<UserUpdate />} />
        </Routes>
      </div>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
