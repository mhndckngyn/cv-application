export function updateFromPrototype<T>(prototype: T) {
  return function setProperty<K extends keyof T>(property: K, value: T[K]) {
    const newObj = { ...prototype }; // shallow cloning
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
