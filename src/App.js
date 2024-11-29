import { Provider } from "react-redux";
import Body from "../src/components/Body"
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
    <div className="App font-sans">
      <Body />
    </div>
    </Provider>
  );
}

export default App;
