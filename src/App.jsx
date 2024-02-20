import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainPage></MainPage>
    </>
  );
}

export default App;
