import React, { Fragment, useState } from 'react';

const EditUser = ({user}) => {
    
const [first_name, setFirstName] = useState(user.first_name);
const [last_name, setLastName] = useState(user.last_name);
const [email, setEmail] = useState(user.email);
const [created_at, setCreatedAt] = useState(user.created_at);

// Update user function
    const updateUser = async (e) => {
        e.preventDefault();
        try {
            const body = { first_name, last_name, email, created_at };
            const response = await fetch(`http://localhost:5000/users/${user.id}`,{
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            );
            
            console.log(response);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    };

return (
<Fragment>
<button 
  type="button" 
  class="btn btn-warning" 
  data-toggle="modal" 
  data-target={`#id${user.id}`}
  >
    Edit
</button>

<div 
    class="modal" 
    id={`id${user.id}`}
    onClick={() => setFirstName(user.first_name)}
     >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Edit User</h4>
        <button 
          type="button" 
          class="close" 
          data-dismiss="modal"
          onClick={() => setFirstName(user.first_name)}
          >
            &times;
          </button>
      </div>

      <div class="modal-body">
        <input 
          type="text"
          className="form-control"
          value={first_name}
          onChange={e => setFirstName(e.target.value)}
        />
        <input 
          type="text"
          className="form-control"
          value={last_name}
          onChange={e => setFirstName(e.target.value)}
        />
        <input 
          type="text"
          className="form-control"
          value={email}
          onChange={e => setFirstName(e.target.value)}
        />
        <input 
          type="text"
          className="form-control"
          value={created_at}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>

      <div class="modal-footer">
        <button 
          type="button" 
          class="btn btn-success" 
          data-dismiss="modal"
          onClick={e => updateUser(e)}
          >
            Save
        </button>
        <button 
          type="button" 
          class="btn btn-danger" 
          data-dismiss="modal"
          onClick={() => setFirstName(user.first_name)}
          >
            Close
        </button>
      </div>

    </div>
  </div>
</div>
</Fragment>);
};

export default EditUser;



























// import React, { Fragment, useState } from 'react';

// const EditUser = ({ user }) => {

//     const [first_name, setFirstName] = useState(user.first_name);
//     const [last_name, setLastName] = useState(user.last_name);
//     const [email, setEmail] = useState(user.email);

//     // update user info function
//     const updateUser = async (e) => {
//         e.preventDefault();
//         try {
//             const body = { first_name, last_name, email };
//             const response = await fetch(`http://localhost:5000/users/${user.id}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(body)
//             });
            
//             window.location = "/";
//         } catch (error) {
//             console.error(error.message);
//         }
//     };
    
//     return (
//             <Fragment>
//                 <button 
//                     type="button" 
//                     class="btn btn-warning" 
//                     data-toggle="modal" 
//                     data-target={`#id${user.id}`}
//                     >
//                 Edit
//                 </button>

//                 <div class="modal" id={`id${user.id}`} onClick={() => setFirstName(user.first_name) & setLastName(user.last_name) & setEmail(user.email)}
// >
//                     <div class="modal-dialog">
//                         <div class="modal-content">
//                             <div class="modal-header">
//                                 <h4 class="modal-title">Edit User</h4>
//                                 <button 
//                                 type="button" 
//                                 class="close" 
//                                 data-dismiss="modal" 
//                                 onClick={() => setFirstName(user.first_name) & setLastName(user.last_name) & setEmail(user.email)}
//                                     >&times;
//                                 </button>
//                             </div>

//                             <div class="modal-body">
//                                 <input type="text" className="form-control" value={first_name} onChange={ e => setFirstName(e.target.value)}/>
//                                 <input type="text" className="form-control" value={last_name} onChange={ e => setLastName(e.target.value)}/>
//                                 <input type="text" className="form-control" value={email} onChange={ e => setEmail(e.target.value)}/>
//                             </div>

//                         <div class="modal-footer">
//                             <button 
//                                 type="button" 
//                                 class="btn btn-warning" 
//                                 data-dismiss="modal"
//                                 onClick={e => updateUser(e)}
//                                 >
//                             Edit
//                             </button>
//                             <button 
//                                 type="button" 
//                                 class="btn btn-danger" 
//                                 data-dismiss="modal"
//                                 onClick={() => setFirstName(user.first_name) & setLastName(user.last_name) & setEmail(user.email)}
//                                 >
//                             Close
//                             </button>
//                         </div>

//                         </div>
//                     </div>
//                 </div>
//             </Fragment>

//     );
// }

// export default EditUser;