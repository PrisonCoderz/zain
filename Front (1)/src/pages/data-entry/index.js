import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from '@emotion/styled'
import { useRouter } from "next/router";
// mui icon
import { Edit, Delete } from '@mui/icons-material';


const Table = styled.table`
td, th{
  border: 1px solid #ddd;
  padding: 20px;
}
`

const List = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  // console.log(data)
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(`http://localhost:9000/api/data-entry`
        )
        if (response.data) {
          setData(response.data)
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  const editProduct = (_id) => {
    router.push(`/data-entry/${_id}`)
  };
  const deleteProduct = async (_id) => {
    let answer = window.confirm(
      'Are you sure you want to delete?'
    )
    if (answer) {
      let response = await axios.delete(`http://localhost:9000/api/data-entry/${_id}`)
      if (response.data) {
        router.reload()
      }
    }
  };

  const thead = () => {
    return <tr>
      <th className="text-center">Edit</th>
      <th className="text-center">First Name</th>
      <th className="text-center">Last Name</th>
      <th className="text-center">Gender</th>
      <th className="text-center">Country</th>
      <th className="text-center">Interests</th>
      <th className="text-center">Bio</th>
    </tr>
  }
  const tbody = () => {
    return (
      data && data.map((item, i) => {
        const { _id, firstName, lastName, gender, country, interests, bio, } = item;
        return <tr key={_id}>
          <td className='w-0'>
            <div className='flex'>
              <Edit className='hover:text-orange-600 transition duration-500 cursor-pointer'
                onClick={() => editProduct(_id)}
              />
              &nbsp;&nbsp;&nbsp;
              <Delete className='hover:text-red-600 transition duration-500 cursor-pointer'
                onClick={() => deleteProduct(_id)}
              />
            </div>
          </td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{gender}</td>
          <td>{country}</td>
          <td>{interests.map((interest, index) => (
            <span key={interest}>
              {interest}
              {index !== interests.length - 1 && ", "}
            </span>
          ))}</td>
          <td>{bio}</td>
        </tr>
      })
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4 p-3">
      <h1 className="font-bold text-4xl">List Data Entry</h1>
      <Table className="w-full bg-stone-300">
        <thead className="h-10">
          {thead()}
        </thead>
        <tbody className='text-center pt-5'>
          {tbody()}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
