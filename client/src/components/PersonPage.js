import React from "react";

const NeedsPerson = props => {
  const { person, children, ...rest } = props;
  if (!person) {
    return "oh noes";
  }

  return children({
    person
  });
};

const PersonPage = props => {
  // if (!person) {
  //  return "Laddare…";
  // }

  return (
    <NeedsPerson person={props.person}>
      {({ person }) => {
        return (
          <div>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>

            <p>Surullinen elämäntarina tässä.</p>
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
