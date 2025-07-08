"use client"
import React, { useReducer } from 'react';
const OPTIONS = ['Option A', 'Option B', 'Option C'] as const;
type Option = typeof OPTIONS[number];
type State = {
  [key in Option]: number;
};
type Action = 
  | { type: 'VOTE'; option: Option };

const initialState: State = OPTIONS.reduce((acc, option) => {
  acc[option] = 0;
  return acc;
}, {} as State);
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
}

const VotingApp = () => {
  const [votes, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Vote for your favorite option</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        {OPTIONS.map(option => (
          <button
            key={option}
            onClick={() => dispatch({ type: 'VOTE', option })}
            style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
          >
            {option}
          </button>
        ))}
      </div>

      <h2>Current votes:</h2>
      <ul>
        {OPTIONS.map(option => (
          <li key={option}>
            {option}: {votes[option]} vote{votes[option] !== 1 ? 's' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VotingApp;
