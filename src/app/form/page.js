import React from 'react'

function page() {
  return (
    <div>
        <form>
            <table>
                <tr>
                 <td><label>Enter Your Name:</label></td>
                 <td> <input type="text"/></td>
                </tr>
                <tr>
                 <td><label>Phone Number:</label></td>
                 <td> <input type="number"/></td>
                </tr><tr>
                 <td><label>Email:</label></td>
                 <td> <input type="mail"/></td>
                </tr><tr>
                 <td><label>Aadhar number:</label></td>
                 <td> <input type="text"/></td>
                </tr><tr>
                 <td><label>Aadhar Card:</label></td>
                 <td> <input type="file"/></td>
                </tr>
                <tr>
                 <td ><button>Book Now</button></td>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default page