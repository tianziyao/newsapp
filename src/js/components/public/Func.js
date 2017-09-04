function print(any) {
  console.log(any)
}

function guard({isTrue: isTrue, doSome: doSome}) {
  if (doSome) {
    doSome()
  }
}

export {print, guard}
// export default print