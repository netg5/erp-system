import {
  API_GET_REQUEST,
  API_RESPONSE_SUCCESS,
  API_REQUEST_ERROR,
} from './../constants/api-types'

export function requestApi(params) {
  console.log(params)
  return {
    type: API_GET_REQUEST,
    isFetching: true,
    params
  }
}

export function responseSuccess(result) {
  return {
    type: API_RESPONSE_SUCCESS,
    isFetching: false,
    result
  }
}

export function responseFail(error) {
  return {
    type: API_REQUEST_ERROR,
    isFetching: false,
    error
  }
}
