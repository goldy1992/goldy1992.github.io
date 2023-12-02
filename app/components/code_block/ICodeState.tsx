
export default interface ICodeState {
    currentIndex : number
    canRender: boolean
}


export const State = {
    Initial: 1,
    NameBold: 2,
    JobItalic: 3,
    ProfilePic: 4,
    VerticalCenter: 5,
    ProfileCenter: 6,
    TextCenter: 7,
    FontSizeLarger: 8
  } as const;