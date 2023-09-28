import React, {useState} from 'react'
import {Table, Button} from 'react-bootstrap'
import { Employees } from './Employees'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
      let history = useNavigate()
      

      const handleDelete = (id)=> {
            const index = Employees.map(function(e){
                  return e.id
            }).indexOf(id);
            Employees.splice(index, 1);
            history('/')
            
      }
      const handleEdite = (id)=> {
            const editableItem = Employees.filter((each)=> {
                  return each.id === id
            })
            console.log(editableItem)
      }

  return (
    <>
     <div style={{margin: "10rem"}}>
      <Table striped bordered hover size='sm'>
            <thead>
                  <tr>
                        <th>Name</th>
                        <th>Age</th>
                  </tr>
            </thead>
            <tbody>
                  {
                        Employees && Employees.length > 0? 
                        Employees.map((item)=> {
                              return (
                                    <tr>
                                          <td>
                                                {item.name}
                                          </td>
                                          <td>
                                                {item.age}
                                          </td>
                                          <td>
                                                <Button onClick={()=> handleDelete(item.id)}>Delete</Button>
                                                &nbsp;
                                                <Button onClick={()=> handleEdite(item.id)}>Edit</Button>
                                          </td>
                                    </tr>
                              )
                        })

                 : "No DATA" }
            </tbody>
      </Table>
     </div>

    </>
  )
}

export default Home