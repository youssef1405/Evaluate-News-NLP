const handleSubmit = (event) => {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.querySelector('.url-input').value;

  if (Client.checkUrl(formText)) {
    Client.postData('http://localhost:3000/article', formText);
  } else {
    Client.updateUI(null);
  }
};

export { handleSubmit };
