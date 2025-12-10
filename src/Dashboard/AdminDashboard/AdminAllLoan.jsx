import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";

const AdminAllLoan = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const { data: allLoan = [], refetch } = useQuery({
    queryKey: ["allloan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allloans/admin");
      return res.data;
    },
  });
  // console.log(allLoan)
  const handleLoanRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allloans/${id}`);
        refetch().then((res) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const handleLoanUpdateId = (id) => {
    // console.log(id)
    setId(id);
    setOpen(true);
  };

  const handleLoanUpdate = (data) => {
    axiosSecure.patch(`/allloans/${id}`, data).then((res) => {
      console.log(res);
      refetch();
      alert("Loan update successfully");
      setOpen(false);
    });
  };

  const handleShowOnHome = async (id, currentStatus) => {
    try {
      await axiosSecure.patch(`/loans/show-on-home/${id}`, {
        showOnHome: !currentStatus,
      });

      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Interest</th>
                <th>Category</th>
                <th>Created By</th>
                <th>ShowOnHome</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allLoan.map((i, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>
                    <img
                      src={i.img}
                      className="h-10 w-10 object-cover"
                      alt=""
                    />
                  </td>
                  <td>{i.title}</td>
                  <td>{i.interest}</td>
                  <td>{i.tag}</td>
                  <td>{new Date(i.createdAt).toLocaleString()}</td>

                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={i.showOnHome}
                      onChange={() => handleShowOnHome(i._id, i.showOnHome)}
                    />
                  </td>
                  <td className="space-x-2">
                    <button
                      onClick={() => handleLoanUpdateId(i._id)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleLoanRemove(i._id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Apply Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/55"
            />

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              className="relative z-10 w-full max-w-xl  bg-cyan-900 text-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Update Loan</h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md  hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <FiX />
                </button>
              </div>

              <form
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
                onSubmit={handleSubmit(handleLoanUpdate)}
              >
                <input
                  {...register("title")}
                  name="title"
                  className="col-span-2 p-3 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  placeholder="Title"
                />
                <input
                  {...register("tagline")}
                  name="tagline"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50 col-span-2 dark:bg-slate-800"
                  placeholder="Tagline"
                />

                <input
                  {...register("max")}
                  name="max"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  placeholder="Max Loan"
                />
                <input
                  {...register("interest")}
                  name="interest"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  placeholder="Interest Rate"
                />

                <input
                  {...register("tag")}
                  required
                  name="tag"
                  className="p-3 rounded-lg col-span-2 border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Tag / Category"
                />

                <input
                  {...register("img")}
                  required
                  name="img"
                  className="p-3 col-span-2 rounded-lg border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Image "
                />

                <div className="col-span-2 flex items-center justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-emerald-600 text-white"
                  >
                    Update
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminAllLoan;
