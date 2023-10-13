


function Ejercicio7(props) {
  const { title, dept, name, avatar } = props

  return (
    <>
      <div className="ejer4Div mb-1">
        <ul className="list-group w-50">
          <li className="list-group-item d-flex align-items-center">
            <img
              src= {avatar}
              alt="empleado foto"
              className="employee-avatar"
            />
            <div>
              <h3 className="mb-2">{name}</h3>

              <div className="d-flex gap-2 align-items-center">
                <h6 className="mb-0">{title}</h6>
                <p className="bg-info mb-0 px-2 rounded text-light">{dept}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Ejercicio7;
