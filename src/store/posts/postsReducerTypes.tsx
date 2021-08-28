import { SuccessType } from './postsActionsTypes'

export type StoreType = {
  loading: boolean,
  data: SuccessType[] | string,
  error: SuccessType[] | string,
}