import { Map, List } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List()
});

const HIRE_PERSON = "HIRE_PERSON";
const HIRE_PERSON_PENDING = "HIRE_PERSON_PENDING";
const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";
const HIRE_PERSON_REJECTED = "HIRE_PERSON_REJECTED";

const FIRE_PERSON = "FIRE_PERSON";
const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
const FIRE_PERSON_REJECTED = "FIRE_PERSON_REJECTED";

const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";
const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";

export const hirePerson = person => {
  return {
    type: HIRE_PERSON,
    payload: personService.hirePerson(person)
  };
};

export const firePerson = id => {
  return {
    type: FIRE_PERSON,
    payload: personService.firePerson(id)
  };
};

export const getPersons = () => {
  return async dispatch => {
    dispatch({
      type: GET_PERSONS_PENDING
    });

    try {
      const persons = await personService.getPersons();
      dispatch({
        type: GET_PERSONS_FULFILLED,
        payload: persons
      });
    } catch (e) {
      dispatch({
        type: GET_PERSONS_REJECTED,
        payload: e,
        error: true
      });
    }
  };
};

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSONS_FULFILLED:
      return state.set("persons", List(payload));

    // Huom. update tässä immutable Mapin ominaisuus, ei yleistä JS:ää
    case FIRE_PERSON_FULFILLED:
      return state.update("persons", persons =>
        persons.filter(p => p.id !== payload)
      );

    case HIRE_PERSON_FULFILLED:
      return state.update("persons", persons => persons.push(payload));

    default:
      return state;
  }
}
