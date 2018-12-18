import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';
import history from './utils/history';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  persistedState,
  composeWithDevTools(
    applyMiddleware(
      createLogger(),
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(rootSaga);

export default store;
