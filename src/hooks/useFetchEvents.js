import { useEffect, useState } from "react"


export function useFetchEvents(options) {
  let [events, setEvents] = useState([]);
  let [error, setError] = useState({});
  let [state, setState] = useState("loading");


  useEffect(() => {
    fetch(options.url)
      .then((response) => {
        if (response.status === 200) {
          let r = response.json()
          return r;
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((data) => {
        data.date = new Date(data.date);
        setEvents(data);
        setState("succeeded")
      })
      .catch((error) => {
        setError(error);
        setState("error");
      });
  }, []);
  console.log("events", events)
  return ([events, error, state])
}