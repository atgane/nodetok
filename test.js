let a = {"ID":"root","room":"admin","message":"root connected"}
let b = {}
console.log(a["room"])
b[a["room"]] = a["room"]
console.log(b)