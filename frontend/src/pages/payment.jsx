// import React from "react";

// const MyAppointments = ({ appointments }) => {
//   return (
//     <div className="appointments">
//       <h1>My Appointments</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Doctor</th>
//             <th>Date</th>
//             <th>Amount</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment._id}>
//               <td>{appointment.doctorName}</td>
//               <td>{new Date(appointment.date).toLocaleDateString()}</td>
//               <td>${appointment.amount}</td>
//               <td>{appointment.paid ? "Paid" : "Pending"}</td>
//               <td>
//                 {!appointment.paid && (
//                   <button
//                     onClick={() => handlePayment(appointment._id)}
//                     className="pay-button"
//                   >
//                     Pay Online
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyAppointments;
