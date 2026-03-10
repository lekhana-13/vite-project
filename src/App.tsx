import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Infrastructure from "./components/Infrastructuresection"
import VisibilitySection from "./components/VisibilitySection"
import DemoSection from "./components/DemoSection"
import KoreValueSection from "./components/KoreVauleSection"
import GlobalBackground from "./components/GlobalBackground";


function App() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <GlobalBackground />
      <Navbar />

      <Hero />

      <Infrastructure />

      <VisibilitySection />

      <DemoSection />

      <KoreValueSection />

    </main>
  )
}

export default App