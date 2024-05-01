import "./alert-messages.js";
import "./form-animation.js";
import { addLightClass } from "./light-theme.js";
import "./mobilemenu.js";
import "./scroll-effect.js";
import { sendMail } from "./send-mail.js";
import "./slider-image.js";

document.getElementById("check").addEventListener("change", addLightClass);
document.getElementById("btn-sendmail").addEventListener("click", sendMail);
