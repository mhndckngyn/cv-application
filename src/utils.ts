/* 
  Takes an object (prototype)
  Returns a function that
    Takes a property and a value
    Returns a shallow copy of the prototype, overriding the specified property
*/
export function updateFromPrototype<T>(prototype: T) {
  return function setProperty<K extends keyof T>(property: K, value: T[K]) {
    const newObj = { ...prototype };
    newObj[property] = value;
    return newObj;
  };
}

export function generateId() {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 12).padStart(12, '0')
  );
}
