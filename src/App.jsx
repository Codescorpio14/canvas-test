import Footer from "./components/Footer";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Products from "./components/Products";
import ToTopButton from "./components/ToTopButton";
import DisplayProducts from "./components/DisplayProducts";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <main className="max-w-[1635px] scroll-smooth relative mx-auto">
        <Products />
        <Blog />
        <DisplayProducts />
        <Features />
        <ToTopButton />
      </main>
      <Footer />
    </>
  );
}

export default App;
