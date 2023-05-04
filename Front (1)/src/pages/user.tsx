// @ts-ignore
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router';
import Sidebar from '@/components/layout/Sidebar';

const User = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(`http://localhost:9000/users`
        )
        if (response.data) {
          setUserList(response.data)
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  const removeUser = async (id: string) => {
    let response = await axios.delete(`http://localhost:9000/user/${id}`)
    if (response.data) {
      Router.reload()
    }
  }
  const editExistUser = (id: string) => { }
  return (
    <Sidebar>
      <div className='p-2 max-w-4xl mx-auto'>
      <h1 className='font-bold text-3xl mb-4'>Users List</h1>
        {userList.length > 0 && userList.map((user: any) => (
          <div key={user._id} className='p-2 m-2 flex justify-between bg-slate-400 items-center'>
            <p>
              <span className='font-bold'>Email:&nbsp;</span>
              <span className='font-normal mr-2'>{user.email}</span>
              <span className='font-bold'>Username:&nbsp;</span>
              <span className='text-sm mr-2'>{user.username}</span>
            </p>
            <div className='flex space-x-3 items-center'>
              <button
                className='bg-red-600 p-2 hover:opacity-90'
                onClick={() => removeUser(user._id)}
              >
                Delete
              </button>
              <button
                className='bg-orange-500 p-2 hover:opacity-90'
                onClick={() => editExistUser(user._id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </Sidebar>
  )
}

export default User