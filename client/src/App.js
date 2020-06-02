import React from "react";
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'; //Zeit-UI
import Header from "./components/Header/Header";

function App() {
  return (
    <ZeitProvider>      // ---> Base provider
    <CssBaseline />     // ---> normalize styles
      <Header />
      <p>
        GitMeet!
      </p>
    </ZeitProvider>
  );
}

export default App;
