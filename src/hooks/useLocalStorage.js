import { useCallback, useEffect, useState } from "react"

const IS_SERVER = typeof window === "undefined"

export function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback(() => {
    // Prevent build error "window is undefined" but keeps working
    if (IS_SERVER) {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? parseJSON(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [initialValue, key])

  // State to store our value
  // Pass initial value to support hydration server-client
  const [storedValue, setStoredValue] = useState(initialValue)

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    // Prevent build error "window is undefined" but keeps working
    if (IS_SERVER) {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      )
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(readValue()) : value

      // Save to local storage
      if(JSON.parse(window.localStorage.getItem(key)) !== newValue){
        window.localStorage.setItem(key, JSON.stringify(newValue))
      }

      // Save state
      setStoredValue(newValue)
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  }

  useEffect(() => {
    setStoredValue(readValue())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const handleStorageChange = useCallback(
    event => {
      if (event?.key && event.key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue]
  )

  return [storedValue, setValue]
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON(value) {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "")
  } catch {
    console.warn("parsing error on", { value })
    return undefined
  }
}
