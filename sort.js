const bubbleSort = arr => {
  let l = arr.length, temp = arr[0], lt = l
  while(l) {
    for(let i = 0; i < l - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      } else {
        lt = i
      }
    }
    l = Math.min(l - 1, lt)
    lt = l
  }
  return arr
}

const selectionSort = arr => {
  let minIndex = 0, temp
  for(let n = 0; n < arr.length; n++) {
    for(let i = n; i < arr.length; i++) {
      if(arr[minIndex] > arr[i]) {
        minIndex = i
      }
    }
    temp = arr[n]
    arr[n] = arr[minIndex]
    arr[minIndex] = temp
    minIndex = n + 1
  }
  return arr
}

const insertionSort = arr => {
  let temp
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[i]) {
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

const swap = (arr, index1, index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const partition = (arr, left, right) => {
  let pivot = left, index = left + 1
  for(let i = index; i <= right; i++) {
    if(arr[pivot] > arr[i]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

const quikSort = (arr, left, right) => {
  const l = typeof left === 'number' ? left : 0,
  r = typeof right === 'number' ? right : arr.length - 1
  if(l < r) {
    const pivotIndex = partition(arr, l, r)
    quikSort(arr, l, pivotIndex - 1)
    quikSort(arr, pivotIndex + 1, r)
  }
  return arr
}

const merge = (left, right) => {
  const mergeArr = []
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      mergeArr.push(left.shift())
    } else {
      mergeArr.push(right.shift())
    }
  }
  mergeArr.push(...left, ...right)
  return mergeArr
}

const mergeSort = arr => {
  const len = arr.length
  if(arr.length < 2) {
    return arr
  }
  const middle = Math.floor(len / 2)
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

console.log(mergeSort([4, 3, 2, 1, 5, 6, 6, 2, 7, 9, 10, 11]))
