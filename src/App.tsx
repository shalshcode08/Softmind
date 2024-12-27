import { Contact } from "lucide-react"
import { Blog } from "./components/Blogs"
import { Features } from "./components/Features"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Stats } from "./components/Stats"


function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
