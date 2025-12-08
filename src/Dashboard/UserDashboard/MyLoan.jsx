import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const MyLoan = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: loan = [] } = useQuery({
    queryKey: ["myloan", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/loanApplication?email=${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div className="p-4">
      {/* ✅ Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Loan Id</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Application Fee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loan.map((i, idx) => (
              <tr key={i._id}>
                <th>{idx + 1}</th>
                <td>{i.loanId}</td>
                <td className="font-medium">{i.loanTitle}</td>
                <td>{i.loanAmount}</td>

                {/* Fee Status */}
                <td>
                  {i.applicationFeeStatus === "paid" ? (
                    <span className="badge badge-success badge-sm">
                      Paid
                    </span>
                  ) : (
                    <span className="badge badge-warning badge-sm">
                      UnPaid
                    </span>
                  )}
                </td>

                {/* Loan Status */}
                <td>
                  {i.status === "approved" && (
                    <span className="badge badge-success">
                      Approved
                    </span>
                  )}
                  {i.status === "pending" && (
                    <span className="badge badge-warning">
                      Pending
                    </span>
                  )}
                  {i.status === "rejected" && (
                    <span className="badge badge-error">
                      Rejected
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="space-x-2">
                  {i.applicationFeeStatus !== "paid" && (
                    <button className="btn btn-xs btn-primary">
                      Pay
                    </button>
                  )}
                  <button className="btn btn-xs btn-error">
                    Cancel
                  </button>
                  <button className="btn btn-xs btn-outline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Card View */}
      <div className="md:hidden space-y-4">
        {loan.map((i, idx) => (
          <div
            key={i._id}
            className="bg-base-100 rounded-xl shadow p-4 space-y-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm">
                {idx + 1}. {i.loanTitle}
              </h3>
              <span className="text-sm font-semibold">
                {i.loanAmount}
              </span>
            </div>

            <p className="text-xs text-gray-500">
              Loan ID: {i.loanId}
            </p>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs">App Fee</p>
                {i.applicationFeeStatus === "paid" ? (
                  <span className="badge badge-success badge-sm">
                    Paid
                  </span>
                ) : (
                  <span className="badge badge-warning badge-sm">
                    UnPaid
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs">Status</p>
                {i.status === "approved" && (
                  <span className="badge badge-success badge-sm">
                    Approved
                  </span>
                )}
                {i.status === "pending" && (
                  <span className="badge badge-warning badge-sm">
                    Pending
                  </span>
                )}
                {i.status === "rejected" && (
                  <span className="badge badge-error badge-sm">
                    Rejected
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              {i.applicationFeeStatus !== "Paid" && (
                <button className="btn btn-sm btn-primary flex-1">
                  Pay
                </button>
              )}

              <button className="btn btn-sm btn-error flex-1">
                Cancel
              </button>

              <button className="btn btn-sm btn-outline flex-1">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLoan;
