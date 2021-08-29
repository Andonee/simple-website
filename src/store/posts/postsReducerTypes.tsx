import { SuccessType } from './postsActionsTypes'

export type StoreType = {
	loading: boolean
	// data: SuccessType[] | string,
	data: any
	error: SuccessType[] | string
}
