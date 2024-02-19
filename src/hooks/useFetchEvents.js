import { useEffect, useState } from "react"


export default function useFetchEvents(url, options={}) {
  let [events, setEvents] = useState([]);
  let [error, setError] = useState({});
  let [state, setState] = useState("loading");
  
  
  if(url==""){    
    return [events, error, state];
  }
  useEffect( () => {
    let fetchData = async () => {
      fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          let r = response.json()
          return r;
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((data) => {
        console.log(options.from);
        console.log(data);
        data.date = new Date(data.date);
        setState("succeeded")
        setEvents(data);
        
      })
      .catch((error) => {
        setState("error");

        setError(error);
      });
    }
    fetchData();
  }, [url]);
  return ([events, error, state])
}