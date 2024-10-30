import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import AppRouter from "./router";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;