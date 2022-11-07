import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}

export default App;
