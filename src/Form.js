import FormCSS from "./Form.module.css"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Form() {
  const contactForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_vr37npm",
        "template_xdzb3op",
        contactForm.current,
        "JEijB2MV2hivYeHI7"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <section className={FormCSS.container}>
      <form
        ref={contactForm}
        onSubmit={sendEmail}
        className={FormCSS.contactForm}
      >
        <h4 className={FormCSS.title}>Has tu consulta</h4>
        <div className={FormCSS.subSec}>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="Nombre(s)"
            name="name"
          ></input>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="Apellido(s)"
            name="surname"
          ></input>
          <input
            className={FormCSS.formItem}
            type="email"
            placeholder="email"
            name="user_email"
          ></input>
        </div>
        <div className={FormCSS.subSec}>
          <input
            className={FormCSS.formItem}
            type="number"
            placeholder="Telefono"
            name="phone"
          ></input>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="Compañia"
            name="company"
          ></input>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="País"
            name="country"
          ></input>
        </div>
        <div className={FormCSS.subSec}>
          <select
            className={[FormCSS.formItem, FormCSS.optIndustrias].join(" ")}
            id="industria"
            name="industry"
            defaultValue=""
          >
            <option value=""></option>
            <option value="joyeria">Joyeria</option>
            <option value="fundicion">Fundicion</option>
          </select>
        </div>
        <div className={FormCSS.subSec}>
          <textarea
            className={[FormCSS.formItem, FormCSS.textArea].join(" ")}
            placeholder="Mensaje"
            name="message"
          ></textarea>
        </div>
        <div className={FormCSS.subSec}>
          <input className={[FormCSS.boton]} type="submit" value="Enviar" />
        </div>
      </form>
    </section>
  )
}
