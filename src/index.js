import { getBlogPosts } from "./data";
import "./style.css";
import LogoImage from "../assets/images/logo.png";
import { logDate } from "./test/date/printDate";

console.log("Webpack 📦📦📦📦");
// list
const blogs = getBlogPosts();
const ul = document.createElement("ul");
blogs.forEach((blog) => {
    const li = document.createElement("li");
    li.innerText = blog + " 📦";
    ul.append(li);
});
document.body.append(ul);

// image
const image = document.createElement("img");
image.src = LogoImage;
document.body.prepend(image);

const h1 = document.createElement("h1");
h1.innerText = "博客列表";
document.body.prepend(h1);

logDate();
