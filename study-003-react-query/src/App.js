import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserInfo from "./components/UserInfo";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Json Placeholder</h1>
      </div>
      <UserInfo />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
