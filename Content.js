//array of images
let Images = [
    "https://www.prime42.net/wp-content/uploads/2020/02/prime42-logo-icon-400px.png",
    "https://static.scientificamerican.com/sciam/cache/file/6707FBEA-499C-41ED-9532AB44DDA359C1_source.jpg",
    "https://www.42collective.com/wp-content/uploads/2021/02/favicon-42collective_FC_PURPLE.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Answer_to_Life.png/220px-Answer_to_Life.png",
	"https://miro.medium.com/max/1400/1*oA63oJ2qoBYiIQ4Wzy8YKw.png"
];


const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * Images.length)
    imgs[i].src = Images[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "If you know, you know.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "42 is the meaning of life.";
}

const titles = document.getElementsByTagName("yt-formatted-string");
for (let i = 0; i < titles.length; i++){
    titles[i].innerText = "42 is the meaning of life.";
}


