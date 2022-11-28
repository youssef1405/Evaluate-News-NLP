async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.querySelector('.url-input').value;
  Client.checkForName(formText);

  console.log('::: Form Submitted :::');

  Client.postData('http://localhost:3000/article', formText);
}

export { handleSubmit };
