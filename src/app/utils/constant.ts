let windowWidth = 0
let windowHeight = 0
if (typeof window !== 'undefined') {
  windowWidth = window && window.innerWidth
  windowHeight = window && window.innerHeight
}
export {windowWidth, windowHeight}