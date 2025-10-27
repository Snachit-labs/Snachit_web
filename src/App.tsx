import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router";
import GlobalLayout from "./layout/globalLayout";
import Index from "./pages/Index";
import Detail from "./pages/Detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Index />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
