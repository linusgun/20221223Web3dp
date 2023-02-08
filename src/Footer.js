import footerCSS from "./Footer.module.css"
import faceIcon from "./img/icons8-facebook-50gray.png"
import inIcon from "./img/icons8-linkedin-circled-48grey.png"

export default function Footer() {
  return (
    <footer>
      <div className={footerCSS.footerMain}>
        <div className={footerCSS.media}>
          <div className={footerCSS.texto}>Siguenos en:</div>
          <a href="https://www.facebook.com/3DPrintingPeru">
            <img src={faceIcon} />
          </a>
          <a href="https://www.facebook.com/3DPrintingPeru">
            <img src={inIcon} />
          </a>
        </div>
        <div className={footerCSS.siteMap}>
          <ul>
            <li>Industrias</li>
            <li>
              <a href="">Joyeria</a>
            </li>
            <li>
              <a href="">Fundicion</a>
            </li>
          </ul>
          <ul>
            <li>Salud</li>
            <li>
              <a href="">Dispositivos medicos</a>
            </li>
            <li>
              <a href="">Bioprinting</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
