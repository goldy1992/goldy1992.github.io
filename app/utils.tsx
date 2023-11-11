
export const scrollToFn : (arg?: string) => void = (arg) => {
    if (arg != null) {
      let el = document.getElementById(arg);
      if (el != null) {
        el.scrollIntoView(true);
      }
    }
  }