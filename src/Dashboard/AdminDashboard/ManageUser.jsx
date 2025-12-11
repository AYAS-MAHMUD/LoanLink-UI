import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAxiosSecure } from '../../Hook/useAxiosSecure'

const ManageUser = () => {
  const axiosSecure = useAxiosSecure()
  const {data : alluser =[]} = useQuery({
    queryKey : ['alluser'],
    queryFn : async ()=>{
      const res = await axiosSecure.get('/alluser/admin')
      return res.data;
    }
  })
  console.log(alluser)
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className='text-center'>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        alluser.map((i,idx)=>(
<tr key={i._id} className='text-center'>
        <th>{idx+1}</th>
        <td>{i.name}</td>
        <td>{i.email}</td>
        <td>{i.role}</td>
        <td>
          <button className='btn btn-accent'>Update</button>
        </td>
      </tr>
        ))
    }
      

    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default ManageUser