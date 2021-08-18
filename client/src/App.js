import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import { Header } from "./layout";
import { QuestionPage, WelcomePage, QuestionCurrentPage } from "./pages";
import "./styles/app.css";
import { socket } from './socket'
import io from "socket.io-client";
const serverEndpoint = "http://127.0.0.1:5001";

class App extends Component {
  state = { socket: null };

  componentDidMount() {
    const socket = io(deployedServer);
    this.setState({ socket });
  };

  componentWillUnmount() {
    this.state.socket.disconnect();
  };

  render() {
    return (
      <div id="App">Hi</div>
    );
  }
}

// function App() {
//   return (
//     <>


//       <Header />
//       <Switch >
//         <Route exact path="/">
//           <WelcomePage />
//         </Route>
//         <Route exact path="/QuestionPage">
//           <QuestionCurrentPage />
//           {/* <QuestionPage /> */}
//         </Route>
//       </Switch>
//     </>
//   );
// }

export default App;
