import React from 'react'

function Table({data}) {
    console.log(data)

  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
            {
                data?.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default Table