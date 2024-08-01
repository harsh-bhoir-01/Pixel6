import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import appStore from "./Utils/appStore";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Provider store={appStore}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
