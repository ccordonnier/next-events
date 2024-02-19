
export const addEventApi = (formdata) => {
  fetch("http://localhost:3001/api/events/add", {
    method: "PUT",
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