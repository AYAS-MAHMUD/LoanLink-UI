import React, { use } from "react";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const AddLoan = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = use(AuthContext)
  const { register, handleSubmit } = useForm();
  
  const handleAddLoan = (data) => {
    console.log(data)
    data.email = user?.email
    axiosSecure.post('/allloans',data)
    .then(res=>{
        toast.success("Loan Application Post Successfully")
    })
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(handleAddLoan)}
        className="my-10 p-5 max-w-6xl"
      >
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <fieldset className="fieldset col-span-2">
              <label className="label ">Title</label>
              <input
              required
                type="text"
                className="input w-full"
                {...register("title")}
                placeholder="title"
              />
            </fieldset>
            <fieldset className="fieldset col-span-2">
              <label className="label">Tagline</label>
              <input
              required
                type="text"
                className="input w-full"
                {...register("tagline")}
                placeholder="tagline"
              />
            </fieldset>
            <fieldset className="fieldset ">
              <label className="label">Interest</label>
              <input
              required
                type="text"
                className="input w-full"
                {...register("interest")}
                placeholder="interest"
              />
            </fieldset>
            <fieldset className="fieldset ">
              <label className="label">Max Amount</label>
              <input
              required
                type="text"
                className="input w-full"
                {...register("max")}
                placeholder="max amount"
              />
            </fieldset>
            <fieldset className="fieldset ">
              <label className="label">Image URL</label>
              <input
              required
                type="text"
                className="input w-full"
                {...register("img")}
                placeholder="image url"
              />
            </fieldset>
            <fieldset className="fieldset ">
              <label className="label">Tag / Category</label>
              <input
              required
                type="text"
                className="input w-full"
                {...register("tag")}
                placeholder="tag"
              />
            </fieldset>
            <div className="flex gap-2">
            <label className="label">Show On Home? </label>
            <input type="checkbox" defaultChecked {...register("showOnHome")}  className="checkbox" />
            </div>
          </div>
        </div>

        <input type="submit" className="bg-gray-800 text-gray-300 flex items-center gap-1 px-4 py-2 rounded-full font-medium w-full my-9 hover:bg-cyan-900 ring-2 ring-cyan-500 hover:text-white transition-colors duration-400" />
      </form>
    </div>
  );
};

export default AddLoan;
