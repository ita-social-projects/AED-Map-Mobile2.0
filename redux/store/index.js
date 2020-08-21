import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducer';
import mainSaga from '../saga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer,applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(mainSaga);

    return store;
}

export default configureStore;