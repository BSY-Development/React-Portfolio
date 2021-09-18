import About from "./Components/About";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;
