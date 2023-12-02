
export default interface ICodeState {
    currentIndex : number
    canRender: boolean
}


export const State = {
    Initial: 1,
    Center: 2,
    Image: 3
  } as const;