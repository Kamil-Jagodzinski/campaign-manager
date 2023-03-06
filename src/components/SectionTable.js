import EditIcon from '../images/edit.png'
import DeleteIcon from '../images/delete.png'


export default function SectionTable(props) {
  return (
    <table className="section-table">
      <thead>
        <tr>
          {props.cells.map(  (cell,id) => 
              <th key={id}> {cell} </th> ) 
          }
          <th key="buttons"> </th>
        </tr>
      </thead>
      <tbody>
        {
          props.rows.map( (row, id) => 
            <tr key={id} className="data-rows">
              {Object.values(row).map( (value, key) => 
                <td key={key}> {value} </td> )
              }
              <td className="table-buttons">
                <button onClick={ (e)=>{ e.preventDefault(); 
                                         handleEdit(row.ID) } }> 
                  <img src={EditIcon} alt='Edit' /> 
                </button>

                <button onClick={ () => { handleDelete(row.id)} }>  
                  <img src={DeleteIcon} alt='Delete' /> 
                </button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )

  function handleEdit(newActiveID){
    props.setForm(props.editNumber)
    props.setActiveID(newActiveID)
    props.setForm(props.editNumber)
  }

  function handleDelete(newActiveID){
    props.setForm(props.editNumber)
    // props.setForm(props.editNumber)
  }

}
    