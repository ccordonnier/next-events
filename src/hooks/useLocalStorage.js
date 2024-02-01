import { useEffect, useState } from "react"

const IS_SERVER = typeof window === "undefined"

export function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState(localStorage.getItem(key)?parseJSON(localStorage.getItem(key)):null);

  const setValue = (value) => {
    let currentValue = parseJSON(localStorage.getItem(key));
    if (currentValue !== value) {
      setStoredValue(value);
      localStorage.setItem(key, stringifyJSON(value))
    }
  }

  const getValue = () => {
      if (IS_SERVER) {
        return initialValue;
      }
      if (localStorage.getItem(key) === "undefined") {
        return "undefined";
      }
      return storedValue;
  }

  const clearLocalStorage = () => {
    setStoredValue(null);
    delete localStorage[key];
  }


  useEffect(() => {
    setValue(parseJSON(localStorage.getItem(key)));
  },[]);




  return [getValue(), setValue, clearLocalStorage]
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON(value) {
  try {
    return (value === "undefined" || value === null) ? undefined : JSON.parse(value ?? "")
  } catch {
    console.warn("Parsing error on", { value })
    return undefined
  }
}

// A wrapper for "JSON.stringify()"" to support "undefined" value
function stringifyJSON(value) {
  try {
    return value === undefined ? "undefined" : JSON.stringify(value ?? {})
  } catch {
    console.warn("Stringify error on", { value })
    return undefined
  }
}
