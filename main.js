

const Http = new XMLHttpRequest();
const url='https://graph.instagram.com/me/media?fields=username,caption,media_url&access_token=' + token;
Http.open("GET", url, false);
Http.send();
var ig_media = JSON.parse(Http.responseText);

const username = "@" + ig_media.data[0].username + " ";

const image0 = ig_media.data[0].media_url;
const caption0 = username + ig_media.data[0].caption;

const image1 = ig_media.data[1].media_url;
const caption1 = username + ig_media.data[1].caption;

const image2 = ig_media.data[2].media_url;
const caption2 = username + ig_media.data[2].caption;

const image3 = ig_media.data[3].media_url;
const caption3 = username + ig_media.data[3].caption;

function display_image_caption() {
    document.getElementById("image0").src = image0;
    document.getElementById("image1").src = image1;
    document.getElementById("image2").src = image2;
    document.getElementById("image3").src = image3;
    
    document.getElementById("caption0").innerHTML = caption0;
    document.getElementById("caption1").innerHTML = caption1;
    document.getElementById("caption2").innerHTML = caption2;
    document.getElementById("caption3").innerHTML = caption3;
  }

display_image_caption();
