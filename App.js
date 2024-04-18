import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/Signin';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import MoodEntry from './Components/MoodEntry';
import MoodHistory from './Components/MoodHistory';
import Settings from './Components/Settings';
import Support from './Components/Support';
import { Button, TextField, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
  <Router>
    <Container maxWidth="sm">
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mood-entry" component={MoodEntry} />
        <Route path="/mood-history" component={MoodHistory} />
        <Route path="/settings" component={Settings} />
        <Route path="/support" component={Support} />
      </Switch>
    </Container>
  </Router>
  );
}

export default App;
