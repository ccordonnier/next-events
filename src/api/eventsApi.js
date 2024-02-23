export const addEventApi = (formdata) => {
  console.log(formdata);
  fetch("http://localhost:3001/api/events/add", {
    method: "POST",
    mode: "cors",
    body: formdata
  })
    .then((response) => {
      console.log(response)
      if (response.status === 201) {
        alert("L'event a bien été enregistré")
        return response.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .catch((error) => {
      console.error("erreur lors de l'enregistrement" + error)

      //alert("erreur lors de l'enregistrement" + error);
    });
}