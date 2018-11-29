import React from "react";
import Loading from "./Loading";
import IndexPage from "./IndexPage";
import { Switch, Route } from "react-router";
import PersonPage from "./PersonPage";

import "./App.pcss";

class App extends React.Component {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson, loading } = this.props;

    return (
      <div>
        <h1>Fraktio ERP 9999</h1>

        {loading && <Loading />}

        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <IndexPage
                  persons={persons}
                  hirePerson={hirePerson}
                  firePerson={firePerson}
                />
              );
            }}
          />
          <Route
            path="/person/:id"
            exact
            render={props => {
              const pid = props.match.params.id;
              const person = persons.get(pid);
              return <PersonPage person={person} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
