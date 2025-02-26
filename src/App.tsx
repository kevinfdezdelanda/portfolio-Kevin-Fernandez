import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import { LanguageProvider } from "./context/LanguageContext";


function App() {

  return (
    <LanguageProvider>
      <Header />
      <Content />
      <Footer />
    </LanguageProvider>
  )
}

export default App
