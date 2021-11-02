const submitHandler = (text) => {
  console.log("submit");
  const bigText = document.getElementById("big-text");
  bigText.innerHTML = text;
  setTimeout(() => {
    bigText.innerHTML = "";
  }, 200);
};

const handleUpload = (e) => {
  console.log(e);
  const images = document.getElementsByTagName("img");

  const imageUrl = URL.createObjectURL(e.target.files[0]);

  for (const image of images) {
    image.src = imageUrl;
  }
};
