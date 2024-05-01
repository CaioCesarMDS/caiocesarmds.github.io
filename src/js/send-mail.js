import { sendMailError, sendMailSuccess } from "./alert-messages.js";
import config from "./config.js";

function sendMail(event) {
    event.preventDefault();
    const { name, email, phone, message } = getFormValues();

    if (name && email && message) {
        Email.send({
            Host: config.HOST,
            Username: config.USERNAME,
            Password: config.PASSWORD,
            To: config.TO_EMAIL,
            From: config.FROM_EMAIL,
            Subject: "Contato - Site Pessoal",
            Body:
                "Nome: " +
                name +
                "<br>Email: " +
                email +
                "<br>Telefone: " +
                phone +
                "<br>Mensagem: " +
                message +
                "<br>",
        }).then(() => sendMailSuccess());
    } else {
        sendMailError();
    }
}

function getFormValues() {
    const name = document.querySelector(".input.name").value;
    const email = document.querySelector(".input.email").value;
    const phone = document.querySelector(".input.phone").value;
    const message = document.querySelector(".textarea.message").value;
    return { name, email, phone, message };
}

export { sendMail };
