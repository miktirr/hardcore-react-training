import React, { memo } from "react";
import Person from "./Person";
import posed from "react-pose";

const PosedList = posed.div({
  hidden: { x: "100%" },
  visible: { x: "0%" }
});

const PersonList = props => {
  const { persons, firePerson } = props;

  if (persons.count() === 0) {
    return null;
  }

  const avgAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <p>
        Henkilöitä listalla: {persons.count()}. Keski-ikä: {avgAge.toFixed(2)}
      </p>

      <PosedList pose="visible" initialPose="hidden">
        {persons
          .sortBy(p => p.firstname)
          .sortBy(p => p.lastName)
          .map(p => (
            <Person key={p.id} firePerson={firePerson} person={p} />
          ))}
      </PosedList>
    </div>
  );
};

export default memo(PersonList);
