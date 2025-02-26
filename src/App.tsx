import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { LanguageProvider } from "./context/LanguageContext";


function App() {

  return (
    <LanguageProvider>
      <Header />
      <Main />
      <Footer />
    </LanguageProvider>
  )
}

export default App
