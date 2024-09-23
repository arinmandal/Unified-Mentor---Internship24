import { Header } from "./Header";
import { Main } from "./Main";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className='App bg-mainBg'>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
