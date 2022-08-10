import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce/Introduce";
import LoginPage from "./components/Introduce/LoginPage";


function App() {
  return (
    <div className="container mr-center">
      <Header />
      <Blog />
      <LoginPage />
      <Introduce />
      <Footer />
    </div>
  );
}

export default App;
