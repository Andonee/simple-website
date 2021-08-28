export type SuccessType = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type ActionType = {
  type: string,
  payload?: SuccessType[] | string
}