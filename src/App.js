import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RqSuperHero from "./components/RqSuperHero";
import SuperHeros from "./components/SuperHeros";

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="superhero" element={<SuperHeros />} />
        <Route path="rqsuperhero" element={<RqSuperHero />} />
      </Routes>
      <ReactQueryDevtools  initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  );
}

export default App;

