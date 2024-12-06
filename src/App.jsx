import  { useState } from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import "./styles/style.css";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div className="app">
      <Navbar setCategory={setCategory} />
      <NewsList category={category} />
    </div>
  );
};

export default App;
