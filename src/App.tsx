import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import "./styles/global.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <Home />
      </div>
    </QueryClientProvider>
  );
};

export default App;
