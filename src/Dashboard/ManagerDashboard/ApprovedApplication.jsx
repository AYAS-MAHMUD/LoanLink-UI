import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";

const ApprovedApplication = () => {
  const axiosSecure = useAxiosSecure();
  const { data: approved = [] } = useQuery({
    queryKey: ["approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loanApplication/approvedpost");
      return res.data;
    },
  });
  console.log(approved);
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Loan ID</th>
                <th>Borrower Name</th>
                <th>Borrowr Email</th>
                <th>Amount</th>
                <th>Approved Date</th>
                
              </tr>
            </thead>
            <tbody>
              {approved.map((i,idx) => (
                <tr key={i._id} className="text-center">
                  <th>{idx+1}</th>
                  <td>{i.loanId}</td>
                  <td>{i.fullName}</td>
                  <td>{i.borrowerEmail}</td>
                  <td>{i.loanAmount}</td>
                  <td>{new Date(i.approvedData).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedApplication;
