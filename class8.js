let vedio = {
  thumbnailUrl: "thumbnail.jpg",
  title: "Learn JavaScript 101 - Tutorial for Everyone",
  views: 6780,
  uploadedOn: "1 day ago",
};

function loadData() {
  const thumbnail = document.getElementById("thubnmail-img");
  thumbnail.src = vedio.thumbnailUrl;

  const videoTitle = document.getElementById("title-p");
  videoTitle.textContent = vedio.title;

  const views = document.getElementById("views-p");
  views.textContent = vedio.views + " views";

  const uploadedOn = document.getElementById("uploaded-on-p");
  uploadedOn.textContent = "• " + vedio.uploadedOn;
}

loadData();