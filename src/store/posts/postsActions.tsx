import { ThunkAction } from 'redux-thunk'
import {
	FETCH_POSTS_FAILURE,
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,
} from './postsTypes'
import { SuccessType, ActionType } from './postsActionsTypes'
import { StoreType } from './postsReducerTypes'

type FetchPostsType = () => ThunkAction<void, StoreType, {}, ActionType>

export const fetchPostRequest = () => {
	return {
		type: FETCH_POSTS_REQUEST,
	}
}

export const fetchPostFailure = () => {
	return {
		type: FETCH_POSTS_FAILURE,
		payload: 'Fetching data error',
	}
}

export const fetchPostSuccess = (data: SuccessType[]) => {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: data,
	}
}

export const fetchPosts: FetchPostsType = () => {
	return async dispatch => {
		try {
			dispatch(fetchPostRequest())

			const response = await fetch('https://jsonplaceholder.typicode.com/posts')

			if (!response.ok) throw new Error()

			const data = await response.json()

			dispatch(fetchPostSuccess(data))
		} catch (error) {
			dispatch(fetchPostFailure())
		}
	}
}
