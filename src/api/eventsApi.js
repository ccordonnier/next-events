import { URL_API_EVENTS } from "@/constants";

export const getEventsApi = async (options) => {
  let paramsUrl = "";
  for (const [key, value] of Object.entries(options)) {
    if(paramsUrl === ""){
      paramsUrl += "?"+key+"="+value;
    }else{
      paramsUrl += "&"+key+"="+value;
    }
  }

  const response = await fetch(URL_API_EVENTS+paramsUrl, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .catch((error) => {
      alert("erreur lors de l'enregistrement" + error);
    });

    return response;
}

export const getOneEventApi = async (id) => {

  const response = await fetch(URL_API_EVENTS+id, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .catch((error) => {
      alert("erreur lors de la récupération de l'évènement: " + error);
    });

  return response;
}

export const addEventApi = (formdata) => {
  formdata.append('id_creator', JSON.parse(localStorage.getItem("account"))._id);
  fetch(URL_API_EVENTS+"/add", {
    method: "POST",
    mode: "cors",
    body: formdata
  })
    .then((response) => {
      if (response.status === 201) {
        alert("L'event a bien été enregistré")
        return response.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .catch((error) => {
      alert("erreur lors de l'enregistrement" + error);
    });
}


export const modifyEventApi = async (id,formdata) => {
  const response = await fetch(URL_API_EVENTS+id, {
    method: "PUT",
    mode: "cors",
    body: formdata
  })
    .then((res) => {
      if (res.status === 201) {
        alert("L'event a bien été modifié")
        return res.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .catch((error) => {
      alert("erreur lors de l'enregistrement" + error);
    });

    return response; 
}

