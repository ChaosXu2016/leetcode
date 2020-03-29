const curryAdd = (() => {
  let cacheArgs = []
  return function add(...args){
    if(args.length > 0) {
      cacheArgs.push(...args)
      return add
    } else {
      let sum = cacheArgs[0] || NaN
      if(cacheArgs.length > 2) {
        sum = cacheArgs.reduce((a, b) => a + b)
      }
      cacheArgs = []
      return sum
    }
  }
})()

console.log(curryAdd(1)(2)(3)())
console.log(curryAdd(2)())
console.log(curryAdd())
