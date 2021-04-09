import axios from 'axios'
import types from '../types.json'

export const createRSO = data => dispatch => {
	// return axios({
	// 	method: 'post',
	// 	url: `${process.env.REACT_APP_BACK_END_URL}/api/Events`,
	// 	data
	// }).then(resp => {
		return dispatch({ type: types.RSO_CREATE_SUCCESS, payload: data })
	// 	return Promise.resolve(`Created event ${resp.data.number}.`)
	// }).catch(error => {
	// 	dispatch({ type: types.RSO_CREATE_FAILURE, error })
	// 	return Promise.reject({ msg: 'An error has occurred.', error })
	// })
}

export const readRSO = () => dispatch => {
	return axios({
		method: 'get',
		url: `${process.env.REACT_APP_BACK_END_URL}/api/Events`,
	}).then((resp) => {
		const data = resp.data.reduce((o,r) => {
			o[r.id] = r
			return o
		}, {})

		dispatch({ type: types.RSOS_READ_SUCCESS, payload: data })
		return Promise.resolve('event read | all good')
	})
	.catch(error => {
		dispatch({ type: types.RSOS_READ_FAILURE, error })
		return Promise.reject({ msg: 'event read | everything is on fire', error })
	})
}

export const updateRSO = data => dispatch => {
	return axios({
		method: 'put',
		url: `${process.env.REACT_APP_BACK_END_URL}/api/Events`,
		data
	})
		.then(() => {
			dispatch({ type: types.RSO_UPDATE_SUCCESS, payload: data })
			return Promise.resolve(`Updated event ${data.number}.`)
		})
		.catch(error => {
			dispatch({ type: types.RSO_UPDATE_FAILURE, error })
			return Promise.reject({ msg: 'An error has occurred.', error })
		})
}

export const deleteRSO = id => dispatch => {
	return axios({
		method: 'delete',
		url: `${process.env.REACT_APP_BACK_END_URL}/api/Events/${id}`,
	}).then(resp => {
		dispatch({ type: types.RSO_DELETE_SUCCESS, payload: id })
		return Promise.resolve(`Deleted event ${resp.data}.`)
	})
	.catch(error => {
		dispatch({ type: types.RSO_DELETE_FAILURE, error })
		return Promise.reject({ msg: 'An error has occurred.', error })
	})
}
