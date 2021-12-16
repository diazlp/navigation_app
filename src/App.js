import "./App.css";
import AppNavigator from "./components/AppNavigator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColorScreen from "./containers/ColorScreen";

const App = () => {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/colorScreen/:color" element={<ColorScreen />} />
        {/* <Route path="/" element={<ColorScreen />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
