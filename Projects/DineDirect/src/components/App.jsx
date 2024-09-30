import { Header } from "./Header";
import { Main } from "./Main";
import { Outlet } from "react-router-dom";
import appStore from "../ReduxStore/appStore";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={appStore}>
      <div className='App bg-mainBg'>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;
