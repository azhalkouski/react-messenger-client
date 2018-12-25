import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';
import history from './utils/history';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    createRootReducer(history),
    persistedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
    ),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
