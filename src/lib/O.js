export const bind = fn => x => x ? fn(x) : null

export const tryCatch = promise => async (x) => {
  try {
    return await promise(x)
  } catch(err) {
    return null;
  }
}

export const pipe = (a, ...fns) => {
  return fns.reduce(
    (value, fn) => value.then(fn),
    Promise.resolve(a)
  )
}
