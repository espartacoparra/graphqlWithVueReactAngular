import React from 'react';
import { Button } from 'react-bootstrap';

const Query = (props) => {

 return (
  < div className="App" >
   <br />
   <div className="row mt-4">
    <div className="col-2">
     <h4>Consulta</h4>
     <pre>{props.queryGetAllUsers}</pre>
    </div>
    <div className="col-4">
     <h4>Edita tu Consulta</h4>
     <label>
      <textarea value={props.queryGetAllUsers} name="getAllUsers" cols="40" rows="20" onChange={(event) => props.onChange(event, props.type)}></textarea>
     </label>
    </div>
    <div className="col-4">
     <div>
      {props.userList !== undefined ?
       <div ><pre>{JSON.stringify(props.userList, null, 2)}</pre></div>
       : <>parametros erroneos</>
      }
     </div>
    </div>
    <div className="col-2 ">
     <Button className="mt-5" variant="secondary" onClick={props.getUsers}>Ejecutar query</Button>
    </div>
   </div>
  </div >
 )
}

export default Query;