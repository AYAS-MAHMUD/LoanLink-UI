
import React, { use } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useAxiosSecure } from '../../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'


const ManageLoans = () => {
  const {user} = use(AuthContext)
  const axiosSecure = useAxiosSecure()
  const {data : loanbyManager = []} = useQuery({
    queryKey : ['loanbyManager',user?.email],
    queryFn : async ()=>{
      const res = await axiosSecure.get(`/allloans/${user?.email}/manageloan`)
      return res.data
    }
  })
  console.log(loanbyManager)
  return (
    <div>
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>3</th>
        <th>Image</th>
        <th>Title</th>
        <th>Interest</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        loanbyManager.map(i=>
<tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
        )
      }
      

    </tbody>
  </table>
</div>
        </div>
    </div>
  )
}

export default ManageLoans