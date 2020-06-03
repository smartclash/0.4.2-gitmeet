import React from "react";
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'; //Zeit-UI
import Header from "./components/Header/Header";
import Landing from "./containers/Landing/Landing";

function App() {
  return (
    <ZeitProvider>
    <CssBaseline />
      <Header />
      <Landing />
    </ZeitProvider>
  );
}

export default App;
