// import './index.css';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Table() {
//   const [data, setData] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [editedEmployees, setEditedEmployees] = useState([]);
//   const [fetchName, setFetchName] = useState('');

//   useEffect(() => {
//     getData();
//     fetchEmployees();
//   }, []);

//   const getData = () => {
//     axios('https://jsonplaceholder.typicode.com/comments')
//       .then((res) => {
//         setData(res.data);
//       });
//   };

//   const fetchEmployees = () => {
//     axios
//       .get('http://localhost:5000/api/getEmployees')
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching employees:', error);
//       });
//   };

//   const handleFetchNameChange = (event) => {
//     setFetchName(event.target.value);
//   };

//   const handleFetchId = () => {
//     const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
//     if (foundEmployee) {
//       setEditedEmployees([...editedEmployees, foundEmployee]);
//     }
//   };

//   const handleEditField = (event, field, empId) => {
//     const updatedEmployees = editedEmployees.map((emp) => {
//       if (emp._id === empId) {
//         emp[field] = event.target.value;
//       }
//       return emp;
//     });
//     setEditedEmployees(updatedEmployees);
//   };

//   const handleSaveEdits = () => {
//     axios
//       .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
//       .then((response) => {
//         console.log(response.data.message);
//         setEditedEmployees([]);
//         fetchEmployees();
//       })
//       .catch((error) => {
//         console.error('Error updating employees:', error);
//       });
//   };

//   return (
//     <div className="tableWrap">
//       <h1 className="BP_name">Bluepage SyncUp</h1>
//       <button>Export</button>

//       {/* Employee Management */}
//       <div className="EmployeeManagement">
//         <h2>Fetch Employee Details:</h2>
//         <label>
//           Enter employee name:
//           <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//         </label>
//         <button onClick={handleFetchId}>Fetch Employee</button>
//         <h2>Edit Employee Details:</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Serial#</th>
//               <th>Emp Name</th>
//               <th>Dept Code</th>
//               <th>Dept Name</th>
//               <th>IsManager?</th>
//               <th>Emp Type</th>
//               <th>Location Blue pages</th>
//               <th>Mgr Name</th>
//               <th>Leader Name</th>
//               <th>Diversity</th>
//               <th>Remarks</th>
//               <th>Work location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp._id}>
//                 <td>{emp['EmployeeSerial#']}</td>
//                 <td>{emp['Emp Name']}</td>
//                 <td>{emp['Dept Code']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Dept Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Dept Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Dept Name']
//                   )}
//                 </td>
//                 <td>{emp['IsManager?']}</td>
//                 <td>{emp['Emp Type']}</td>
//                 <td>{emp['Location Blue pages']}</td>
//                 <td>{emp['Mgr Name']}</td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Leader Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Leader Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Leader Name']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Diversity']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Diversity', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Diversity']
//                   )}
//                 </td>
//                 <td>
//                   {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (
//                     <input
//                       type="text"
//                       value={emp['Remarks']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Remarks', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Remarks']
//                   )}
//                 </td>
//                 <td>{emp['Work location']}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={handleSaveEdits}>Save Edits</button>
//       </div>
//     </div>
//   );
// }

// export default Table;

//////////////////////////////////////////////////////////////////   Final   ////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

function Table()
    {
        const [data, setData] = useState([]);
        const [employees, setEmployees] = useState([]);
        const [editedEmployees, setEditedEmployees] = useState([]);
        const [fetchName, setFetchName] = useState('');
      
        useEffect(() => {
          getData();
          fetchEmployees();
        }, []);
      
        const getData = () => {
          axios('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
              setData(res.data);
            });
        };
      
        const fetchEmployees = () => {
          axios
            .get('http://vakcouch:couvakch@localhost:5984/headcount/_design/design1/_view/fullview')
            .then((response) => {
              setEmployees(response.data);
            })
            .catch((error) => {
              console.error('Error fetching employees:', error);
            });
        };
      
        const handleFetchNameChange = (event) => {
          setFetchName(event.target.value);
        };
      
        const handleFetchId = () => {
          const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
          if (foundEmployee) {
            setEditedEmployees([...editedEmployees, foundEmployee]);
          }
        };
      
        const handleEditField = (event, field, empId) => {
          const updatedEmployees = editedEmployees.map((emp) => {
            if (emp._id === empId) {
              emp[field] = event.target.value;
            }
            return emp;
          });
          setEditedEmployees(updatedEmployees);
        };
      
        const handleSaveEdits = () => {
          axios
            .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
            .then((response) => {
              console.log(response.data.message);
              setEditedEmployees([]);
              fetchEmployees();
            })
            .catch((error) => {
              console.error('Error updating employees:', error);
            });
        };  
    return(

        <div class="tableWrap">
        <h1 class ="BP_name"> BluePage SyncUp</h1>
        <button>Export</button>
        <h2>Fetch Employee Details:</h2>
        <label>
          Enter employee name:
          <input type="text" value={fetchName} onChange={handleFetchNameChange} />
        </label>
        <button onClick={handleFetchId}>Fetch Employee</button>
        <h2>Edit Employee Details:</h2>
        <table>
        <thead>
              <th>Employee Serial#</th>
              <th>Emp Name</th>
              <th>Dept Code</th>
              <th>Dept Name</th>
              <th>IsManager?</th>
              <th>Emp Type</th>
              <th>Location Blue pages</th>
              <th>Mgr Name</th>
              <th>Leader Name</th>
              <th>Diversity</th>
              <th>Remarks</th>
              <th>Work location</th>
            
        </thead>
        
        <tbody>
        {employees.map((emp) => (
            <tr key={emp._id}>
            <td>{emp['EmployeeSerial#']}</td>
            <td>{emp['Emp Name']}</td>
            <td>{emp['Dept Code']}</td>

      <td>
      {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

        <input
          type="text"
          required="required"
          placeholder="Enter the department name"
          name="fullName"
          value={emp['Dept Name']}
                      onChange={(event) =>
                        handleEditField(event, 'Dept Name', emp._id)
                    }
                    />
                  ) : (
                    emp['Dept Name']
                  )}
                </td>
                <td>{emp['IsManager?']}</td>
                <td>{emp['Emp Type']}</td>
                <td>{emp['Location Blue pages']}</td>
                <td>{emp['Mgr Name']}</td>
      <td>
      {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

        <input
          type="text"
          required="required"
          placeholder="Enter the leader's name"
          name="fullName"
          value={emp['Leader Name']}
                      onChange={(event) =>
                        handleEditField(event, 'Leader Name', emp._id)
                      }
                    />
                  ) : (
                    emp['Leader Name']
                  )}
                </td>

      <td>
      {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

        <input
          type="text"
          required="required"
          placeholder="Y/N"
          name="fullName"
          value={emp['Diversity']}
                      onChange={(event) =>
                        handleEditField(event, 'Diversity', emp._id)
                      }
                    />
                  ) : (
                    emp['Diversity']
                  )}
                </td>
      <td>
      {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

        <input
          type="text"
          required="required"
          placeholder="Enter Remarks"
          name="fullName"
          value={emp['Remarks']}
                      onChange={(event) =>
                        handleEditField(event, 'Remarks', emp._id)
                      }
                    />
                  ) : (
                    emp['Remarks']
                  )}
                </td>
                <td>{emp['Work location']}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Remarks"
          name="fullName"
        />
      </td>
      {/* <td>{current.WorkLocation}</td> */}
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Remarks"
          name="fullName"
        />
      </td>
    </tr>
  ))}
</tbody>

        
        </table>
        
        <div class="button">
        <button onClick={handleSaveEdits}>Save Edits</button>
        </div>
        
    
        </div>
    );

}

export default Table;



////////////////////////////////////////////////////////////////   EDITED CODE    ////////////////////////////////////////////////////////////////////////s

// import React, { useState, useEffect } from 'react';
// // import Data from './data.json';
// import './index.css';
// import axios from 'axios';

// function Table()
//     {
//         const [data, setData] = useState([]);
//         const [employees, setEmployees] = useState([]);
//         const [editedEmployees, setEditedEmployees] = useState([]);
//         const [fetchName, setFetchName] = useState('');
//         const [show, setShow] = useState(false);
//         const [currentPage, setCurrentPage] = useState(1);
//         const itemsPerPage = 10;
        
//         const indexOfLastItem = currentPage * itemsPerPage;
//         const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//         const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);
//         const onPageChange = (newPage) => {
//           setCurrentPage(newPage);

//         useEffect(() => {
//           getData();
//           fetchEmployees();
//         }, []);
      
//         const getData = () => {
//           axios('https://jsonplaceholder.typicode.com/comments')
//             .then((res) => {
//               setData(res.data);
//             });
//         };
      
//         const fetchEmployees = () => {
//           axios
//             .get('http://localhost:5000/api/getEmployees')
//             .then((response) => {
//               setEmployees(response.data);
//             })
//             .catch((error) => {
//               console.error('Error fetching employees:', error);
//             });
//         };
      
//         const handleFetchNameChange = (event) => {
//           setFetchName(event.target.value);
//         };
      
//         const handleFetchId = () => {
//           const foundEmployee = employees.find((emp) => emp['Emp Name'] === fetchName);
//           if (foundEmployee) {
//             setEditedEmployees([...editedEmployees, foundEmployee]);
//           }
//         };
      
//         const handleEditField = (event, field, empId) => {
//           const updatedEmployees = editedEmployees.map((emp) => {
//             if (emp._id === empId) {
//               emp[field] = event.target.value;
//             }
//             return emp;
//           });
//           setEditedEmployees(updatedEmployees);
//         };
      
//         const handleSaveEdits = () => {
//           axios
//             .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
//             .then((response) => {
//               console.log(response.data.message);
//               setEditedEmployees([]);
//               fetchEmployees();
//             })
//             .catch((error) => {
//               console.error('Error updating employees:', error);
//             });
//         };  
//       }}
//       function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
//         const pageNumbers = [];
      
//         for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//           pageNumbers.push(i);
//         }
//     return(

//         <div class="tableWrap">
//         <h1 class ="BP_name"> BluePage SyncUp</h1>
//         <h2>Fetch Employee Details:</h2>
//         <label>
//           Enter employee name:
//           <input type="text" value={fetchName} onChange={handleFetchNameChange} />
//         </label>
//         <button onClick={handleFetchId}>Fetch Employee</button>
//       {/* START */}
//         <h2>Edit Employee Details:</h2>
//         <table>
//         <thead>
//               <th>Employee Serial#</th>
//               <th>Emp Name</th>
//               <th>Dept Code</th>
//               <th>Dept Name</th>
//               <th>IsManager?</th>
//               <th>Emp Type</th>
//               <th>Location Blue pages</th>
//               <th>Mgr Name</th>
//               <th>Leader Name</th>
//               <th>Diversity</th>
//               <th>Remarks</th>
//               <th>Work location</th>
            
//         </thead>
        
//         <tbody>
//         {employees.map((emp) => (
//             <tr key={emp._id}>
//             <td>{emp['EmployeeSerial#']}</td>
//             <td>{emp['Emp Name']}</td>
//             <td>{emp['Dept Code']}</td>

//       <td>
//       {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

//         <input
//           type="text"
//           required="required"
//           placeholder="Enter the department name" 
//           name="fullName"
//           value={emp['Dept Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Dept Name', emp._id)
//                     }
//                     />
//                   ) : (
//                     emp['Dept Name']
//                   )}
//                 </td>
//                 <td>{emp['IsManager?']}</td>
//                 <td>{emp['Emp Type']}</td>
//                 <td>{emp['Location Blue pages']}</td>
//                 <td>{emp['Mgr Name']}</td>
//       <td>

//       {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

//         <input
//           type="text"
//           required="required"
//           placeholder="Enter the leader's name"
//           name="fullName"
//           value={emp['Leader Name']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Leader Name', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Leader Name']
//                   )}
//                 </td>

//       <td>
//       {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

//         <input
//           type="text"
//           required="required"
//           placeholder="Y/N"
//           name="fullName"
//           value={emp['Diversity']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Diversity', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Diversity']
//                   )}
//                 </td>
//       <td>
//       {editedEmployees.some((editedEmp) => editedEmp._id === emp._id) ? (

//         <input
//           type="text"
//           required="required"
//           placeholder="Enter Remarks"
//           name="fullName"
//           value={emp['Remarks']}
//                       onChange={(event) =>
//                         handleEditField(event, 'Remarks', emp._id)
//                       }
//                     />
//                   ) : (
//                     emp['Remarks']
//                   )}
//                 </td>
//                 <td>{emp['Work location']}</td>
//       <td>
//         <input
//           type="text"
//           required="required"
//           placeholder="Enter Remarks"
//           name="fullName"
//         />
//       </td>
//       {/* <td>{current.WorkLocation}</td> */}
//       <td>
//         <input
//           type="text"
//           required="required"
//           placeholder="Enter Remarks"
//           name="fullName"
//         />
//       </td>
//     </tr>
//   ))}
// </tbody>

// </table>
//              <Pagination
//         itemsPerPage={itemsPerPage}
//         totalItems={employees.length}
//         currentPage={currentPage}
//         onPageChange={onPageChange}
//       />
//         <div class="button">
//         <button onClick={handleSaveEdits}>Save Edits</button>
//         </div>
//         {/* <div className="legend-container">
//       <p>Legend:</p>
//       <ul className="legend-list">
//         <li>Legend item 1</li>
//         <li>Legend item 2</li>
//       </ul>
//     </div> */}
//     <div className="legend-container">
//       <p>Legend:</p>
//       <ul className="legend-list">
//         <li>
//           <span className="legend-color" style={{ backgroundColor: 'lightblue' }}></span>
//           Employees left
//         </li>
//         <li>
//           <span className="legend-color" style={{ backgroundColor:'lightgreen' }}></span>
//           Employees joined
//         </li>
//         {/* Add more legend items */}
//       </ul>
//     </div>
 
//         </div>
//     );

// }

// export default Table;



////////////////////////////////////////////////////////////////   EDITED CODE_2    ////////////////////////////////////////////////////////////////////////s

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => onPageChange(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Table() {
  const [employees, setEmployees] = useState([]);
  const [editedEmployees, setEditedEmployees] = useState([]);
  const [fetchName, setFetchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    getData();
    fetchEmployees();
  }, []);

  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data);
      });
  };

  const fetchEmployees = () => {
    axios
      .get('http://vakcouch:couvakch@localhost:5984/headcount/_design/design1/_view/fullview')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  };

  const handleFetchNameChange = (event) => {
    setFetchName(event.target.value);
  };

  const handleFetchId = () => {
    const foundEmployee = employees.find((emp) => emp['Emp_Name'] === fetchName);
    if (foundEmployee) {
      setEditedEmployees([...editedEmployees, foundEmployee]);
    }
  };

  const handleEditField = (event, field, empId) => {
    const updatedEmployees = editedEmployees.map((emp) => {
      if (emp._id === empId) {
        emp[field] = event.target.value;
      }
      return emp;
    });
    setEditedEmployees(updatedEmployees);
  };

  const handleSaveEdits = () => {
    axios
      .post('http://localhost:5000/api/updateEmployees', { employees: editedEmployees })
      .then((response) => {
        console.log(response.data.message);
        setEditedEmployees([]);
        fetchEmployees();
      })
      .catch((error) => {
        console.error('Error updating employees:', error);
      });
  };

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return(

    <div class="tableWrap">
    <h1 class ="BP_name"> BluePage SyncUp</h1>
    <h2>Fetch Employee Details:</h2>
    <label>
      Enter employee name:
      <input type="text" value={fetchName} onChange={handleFetchNameChange} />
    </label>
    <button onClick={handleFetchId}>Fetch Employee</button>
  {/* START }
    <h2>Edit Employee Details:</h2>
    <table>
    <thead>
          <th>Employee Serial#</th>
          <th>Emp Name</th>
          <th>Dept Code</th>
          <th>Dept Name</th>
          <th>IsManager?</th>
          <th>Emp Type</th>
          <th>Location Blue pages</th>
          <th>Mgr Name</th>
          <th>Leader Name</th>
          <th>Diversity</th>
          <th>Remarks</th>
          <th>Work location</th>
          <th>Date of Joining</th>
          <th>Date of Leaving</th>
          <th>Employee Status</th> 
    </thead>
    
    <tbody>
    {employees.map((emp) => (
      <tr>
        <td>123</td>
      </tr>
))}
</tbody>

</table>
    <Pagination
    itemsPerPage={itemsPerPage}
    totalItems={employees.length}
    currentPage={currentPage}
    onPageChange={onPageChange}
  />
    <div class="button">
    <button onClick={handleSaveEdits}>Save Edits</button>
    </div>
    {/*<div className="legend-container">
  <p>Legend:</p>
  <ul className="legend-list">
    <li>Legend item 1</li>
    <li>Legend item 2</li>
  </ul>
</div> }
<div className="legend-container">
  <p>Legend:</p>
  <ul className="legend-list">
    <li>
      <span className="legend-color" style={{ backgroundColor: 'lightblue' }}></span>
      Employees left
    </li>
    <li>
      <span className="legend-color" style={{ backgroundColor:'lightgreen' }}></span>
      Employees joined
    </li>
    {/* Add more legend items }
  </ul>
</div>

    </div>
);

}

export default Table;

*/

