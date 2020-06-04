import React from "react";
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'; //Zeit-UI
import Header from "./components/Header/Header";
import Landing from "./containers/Landing/Landing";
import Meet from "./containers/Search/Meet";

function App() {
  return (
    <ZeitProvider>
      <CssBaseline />
      <Header />
      <Meet />
    </ZeitProvider>
  );
}

export default App;
