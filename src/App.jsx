import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <main>
      <Home>
        <Header/>
      </Home>
      <About/>
      <Projects/>
    </main>
  )
}

export default App
