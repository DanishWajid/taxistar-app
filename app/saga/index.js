import { fork } from 'redux-saga/effects';
import watchUserAction from './watcher'

export default function* rootSaga() {
    yield fork(watchUserAction);
}