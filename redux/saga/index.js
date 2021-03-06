import {takeEvery,call,put} from 'redux-saga/effects';
import {getAllDefs,getDeff} from '../operations';
import {setDeffs, setDeff, setDirection, setLoader, setDeffLoader, setDuration} from '../actions';
import { GET_DEFFS_DATA, GET_DEFF, GET_DIRECTION } from '../types';
import findWay from '../../utils/findWay';
import getDirections from '../../utils/getDirections';

function* handleDeffs () {
    yield put(setLoader(true));
    const deffs = yield call(getAllDefs);
    yield put(setDeffs(deffs));
    yield put(setLoader(false))
}

function* handleDeff ({payload}) {
    yield put(setDeffLoader(true));
    const deff = yield call(getDeff,payload);
    yield put(setDeff(deff));
    yield put(setDuration(null));
    yield put(setDeffLoader(false))

}

function* handleGetDirection({payload}) {
    yield put(setLoader(true));
    const {coordinates, duration} = yield call(findWay,payload.location,payload.destLocation,payload.drivingMode);
    const direction = yield call(getDirections,coordinates);
    yield put(setLoader(false));
    yield put(setDirection(direction));
    yield put(setDuration(duration));
}

export default function* mainSaga () {
    yield takeEvery(GET_DEFFS_DATA,handleDeffs);
    yield takeEvery(GET_DEFF,handleDeff);
    yield takeEvery(GET_DIRECTION,handleGetDirection);
}
