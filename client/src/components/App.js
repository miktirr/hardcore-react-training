import React from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import Loading from "./Loading";

import "./App.pcss";

class App extends React.Component {
  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson, loading } = this.props;

    const isGoodPerson = p => p.gender === "m" && p.age < 30;
    const isBadPerson = p => !isGoodPerson(p);

    const GoodPersons = persons.filter(isGoodPerson);
    const BadPersons = persons.filter(isBadPerson);

    return (
      <div>
        <h1>Fraktio ERP 9999</h1>

        {loading && <Loading />}

        <HirePersonForm hirePerson={hirePerson} />

        <h2>Pahat ihmiset</h2>
        <PersonList persons={GoodPersons} firePerson={firePerson} />

        <h2>Hyvät ihmiset</h2>
        <PersonList persons={BadPersons} firePerson={firePerson} />
      </div>
    );
  }
}

export default App;
