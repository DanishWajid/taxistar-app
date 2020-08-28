import { takeLatest } from 'redux-saga/effects';
import { userLoginAuth } from './userLoginAuth';
import * as types from '../actions';

export default function* watchUserAction(){
    yield takeLatest(types.LOGIN_USER,userLoginAuth)
}