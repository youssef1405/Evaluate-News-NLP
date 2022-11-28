async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log('::: Form Submitted :::');
  // fetch('http://localhost:3000/test')
  //   .then((res) => res.json())
  //   .then(function (res) {
  //     document.getElementById('results').innerHTML = res.message;
  //   });
  postData('http://localhost:3000/article', formText);
}

const postData = async (url, formUrl) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formUrl }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  //const d = await res.json();
  //console.log(d);
};

export { handleSubmit };
