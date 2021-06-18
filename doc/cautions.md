StateProvider(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.

괄호 똑바로...

```dif
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
};
>>>
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

```

## Firebase

- npm i firebase
- sudo npm i -g firebase-tools

## customization

https://github.com/joshwcomeau/react-flip-move

## axios

why axios is prefer to the js post/get 