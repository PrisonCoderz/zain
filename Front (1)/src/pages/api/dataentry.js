const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      gender,
      country,
      interests,
      bio,
    });
  
    axios.post('/api/data-entry', {
      firstName,
      lastName,
      gender,
      country,
      interests,
      bio,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };
  