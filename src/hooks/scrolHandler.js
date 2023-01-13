// stop scroll when selected some region
export default function stopScroll(prop) {
  document.getElementById("mainPage_scrollWrap").style.overflowY = prop
  // document.getElementsByTagName('html')[0].style.position = prop
}
