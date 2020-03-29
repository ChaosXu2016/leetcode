/**
 * @param {string} s
 * @return {string[]}
 */

const isValidAddress = address => {
  return !(
    (address.length > 1 && address[0] === '0') ||
    Number(address) > 255
  )
}

const dfsAddress = (s, i, lastAddresses, addressesList) => {
  const restLength = s.length - i
  let addresses = []
  if(restLength > 0 && restLength <= (4 - lastAddresses.length) * 3) {
    if(lastAddresses.length === 3) {
      const nextAddress = s.slice(i)
      if(isValidAddress(nextAddress)) {
        addresses = [...lastAddresses, nextAddress]
      }
    } else {
      for(let n = 1; n <= restLength && n <= 3; n++) {
        const nextAddress = s.slice(i, i + n)
        if(isValidAddress(nextAddress)) {
          addresses = [...lastAddresses, nextAddress]
          dfsAddress(s, i + n, addresses, addressesList)
        }
      }
    }
  }
  addresses.length === 4 && addressesList.push(addresses.join('.'))
}

var restoreIpAddresses = function(s) {
  const addressesList = []
  dfsAddress(s, 0, [], addressesList)
  return addressesList
};

console.log(restoreIpAddresses("010010"))
