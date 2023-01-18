export default function Form() {
  return (
    <form>
      <h4>Has tu consulta</h4>
      <input type="text" placeholder="Primer Nombre"></input>
      <input type="text" placeholder="Segundo Nombre"></input>
      <input type="email" placeholder="email"></input>
      <input type="text" placeholder="Telefono"></input>
      <input type="text" placeholder="Compañia"></input>
      <input type="text" placeholder="País"></input>
      <select id="industria" name="industria">
        <option value="volvo">Aplicacion</option>
        <option value="saab">Materiales</option>
        <option value="saab">Materiales</option>
      </select>
      <select id="aplicacion" name="aplicacion">
        <option value="volvo">Aplicacion</option>
        <option value="saab">Materiales</option>
        <option value="saab">Materiales</option>
      </select>
      <textarea placeholder="Mensaje"></textarea>
    </form>
  )
}
