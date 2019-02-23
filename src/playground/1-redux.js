import { createStore, combineReducers } from "redux";
import { CREATE_POLICY, DELETE_POLICY, CREATE_CLAIM } from "./types";

// Actions
const createPolicy = ({ name = "", amount = 0 }) => ({
  type: CREATE_POLICY,
  payload: {
    name,
    amount
  }
});

const deletePolicy = name => ({
  type: DELETE_POLICY,
  payload: {
    name
  }
});

const createClaim = ({ name, amountOfMoneyToCollect }) => ({
  type: CREATE_CLAIM,
  payload: {
    name,
    amountOfMoneyToCollect
  }
});
//reducers

// claimsHistoryReducer
const claimsHistoryDefaultState = [];

const claimsHistory = (state = claimsHistoryDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_CLAIM:
      return [...state, payload];

    default:
      return state;
  }
};

// accounting reducer

const accountingDefaultState = 0;

const accounting = (state = accountingDefaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CLAIM:
      return state - payload.amountOfMoneyToCollect;
    case CREATE_POLICY:
      return state + payload.amount;
    default:
      return state;
  }
};

//policies reducer

const policiesDefaultState = [];

const policies = (state = policiesDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_POLICY:
      return [...state, payload];
    case DELETE_POLICY:
      return state.filter(({ name }) => name !== payload.name);

    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    claimsHistory,
    accounting,
    policies
  })
);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createPolicy({ name: "bel7a", amount: 22 }));
store.dispatch(createPolicy({ name: "miamia", amount: 48 }));

store.dispatch(
  createClaim({
    name: "lola claim",
    amountOfMoneyToCollect: 30
  })
);

store.dispatch(deletePolicy("miamia"));
