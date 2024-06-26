import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageArticle from "./PageArticle";
import PageWeather from "./PageWeather";
import NotFound from "./NotFound";
import Contacts from "./Contacts";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageArticle />} />\
          <Route path="/weather" element={<PageWeather />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
