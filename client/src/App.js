import React from "react";
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'; //Zeit-UI
import Header from "./components/Header/Header";
import Landing from "./containers/Landing/Landing";
import Meet from "./containers/Search/Meet";
import {
    Route
} from "react-router-dom";
import axios from "axios";

class Routers extends React.Component {
    constructor(props) {
        super(props);
        const repos = this.getUserRepos();
        const user = this.getUserData();

        console.log(repos);
        console.log(user);

        this.setState({ repos, user });
    }

    async getUserRepos() {
        return await axios.get('https://gitmeet.herokuapp.com/user/repos', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDg4NTU2YzAxZjdlMGVkY2E5YjMyMiIsInVzZXJuYW1lIjoic21hcnRjbGFzaCIsImVtYWlsIjoieGFscGhhbWFueEB0dXRhLmlvIiwiaWF0IjoxNTkxMjgyODM4LCJleHAiOjE1OTE0NTU2Mzh9.hoiNUAChH82rLhsegbiO4OlCqLv-cXMEs4BmfknOYsI'
            },
            crossdomain: true,
        });
    }

    async getUserData() {
        return await axios.get('https://gitmeet.herokuapp.com/auth/check', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDg4NTU2YzAxZjdlMGVkY2E5YjMyMiIsInVzZXJuYW1lIjoic21hcnRjbGFzaCIsImVtYWlsIjoieGFscGhhbWFueEB0dXRhLmlvIiwiaWF0IjoxNTkxMjgyODM4LCJleHAiOjE1OTE0NTU2Mzh9.hoiNUAChH82rLhsegbiO4OlCqLv-cXMEs4BmfknOYsI'
            },
            crossdomain: true,
        });
    }

    render() {
        return (
            <div>
                <Route path="/meet" component={Meet} />
                <Route path="/" component={Landing} />
            </div>
        );
    }
}

function App() {
  return (
    <ZeitProvider>
      <CssBaseline />
      <Header />

      <Routers />

    </ZeitProvider>
  );
}

export default App;
