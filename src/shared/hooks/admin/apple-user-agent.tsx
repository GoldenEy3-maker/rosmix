export function isAppleUserAgent(navigator: Navigator) {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
}
