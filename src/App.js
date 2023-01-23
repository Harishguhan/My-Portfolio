import { Route, Routes } from "react-router-dom";
import "./Assets/Fonts/GeneralSans-Medium.otf";
import "./index.css";
import { CustomRoutes } from "./Routes/CustomRoutes";
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          {CustomRoutes.map((item, key) => {
            return (
              <Route path={item.path} key={key} element={<item.component />} />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
