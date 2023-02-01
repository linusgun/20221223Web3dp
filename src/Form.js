import FormCSS from "./Form.module.css"

export default function Form() {
  return (
    <section className={FormCSS.container}>
      <form className={FormCSS.contactForm}>
        <h4 className={FormCSS.title}>Has tu consulta</h4>
        <div className={FormCSS.subSec}>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="Primer Nombre"
          ></input>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="Segundo Nombre"
          ></input>
          <input
            className={FormCSS.formItem}
            type="email"
            placeholder="email"
          ></input>
        </div>
        <div className={FormCSS.subSec}>
          <input
            className={FormCSS.formItem}
            type="number"
            placeholder="Telefono"
          ></input>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="Compañia"
          ></input>
          <input
            className={FormCSS.formItem}
            type="text"
            placeholder="País"
          ></input>
        </div>
        <div className={FormCSS.subSec}>
          <select
            className={[FormCSS.formItem, FormCSS.optIndustrias].join(" ")}
            id="industria"
            name="industria"
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
          ></textarea>
        </div>
        <div className={FormCSS.subSec}>
          <input className={[FormCSS.boton]} type="button" value="Enviar" />
        </div>
      </form>
    </section>
  )
}
