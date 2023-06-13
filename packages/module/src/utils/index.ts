
export function stringToHex(str: string) {
  var arr = []
  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i).toString(16)
  }
  return arr.join('')
}
