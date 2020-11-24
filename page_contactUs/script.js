import { Header } from "../header_footer/scripts/header_content.js";
import { Footer } from "../header_footer/scripts/footer.js";
import { SideContainerJoin } from "../header_footer/scripts/side_panel_join.js";
import { LoginForm } from "../header_footer/scripts/loginform.js";

const headerPanel = document.querySelector(".header_content");
const headerelem = new Header(headerPanel);

const footerBlock = document.querySelector(".footer-section");
const block = new Footer(footerBlock);

const joinside = document.querySelector(".joinUs-side-conteiner-root");
const sidecontentjoin = new SideContainerJoin(joinside);

const loginFormElem = document.querySelector("#rootPoint");
const loginpage = new LoginForm(loginFormElem);
