const usersArray = [
  { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
  { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
  { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
  { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
  { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 },
]

const usersObject = {
  '34rdca3eeb7f6fgeed471198': {
    id: '34rdca3eeb7f6fgeed471198',
    name: 'Andrew',
    age: 25,
  },
  '76rdca3eeb7f6fgeed471100': {
    id: '76rdca3eeb7f6fgeed471100',
    name: 'Alexey',
    age: 15,
  },
  '12rdca3eeb7f6fgeed4711012': {
    id: '12rdca3eeb7f6fgeed4711012',
    name: 'Egor',
    age: 13,
  },
  '32rdca3eeb7f6fgeed471101': {
    id: '32rdca3eeb7f6fgeed471101',
    name: 'Kate',
    age: 31,
  },
  '98rdca3eeb7f6fgeed471102': {
    id: '98rdca3eeb7f6fgeed471102',
    name: 'Elena',
    age: 18,
  },
}

function fromObjGetResult(obj) {
  const idObj = Object.keys(obj).filter((keys) => obj[keys].age >= 18)
  const newObj = idObj.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})

  return newObj
}

function fromArrGetResult(arr) {
  let idArr = arr.reduce((acc, val, i) => {
    if (val.age >= 18) {
      acc.push(val)
    }
    return acc
  }, [])

  return idArr
}

function getAdultUsers(infoPacket) {
  if (Array.isArray(infoPacket)) {
    return fromArrGetResult(infoPacket)
  } else {
    return fromObjGetResult(infoPacket)
  }
}

console.log(getAdultUsers(usersObject))
