import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const FromData = ({ refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //creat list data
  const onSubmit = (data) => {
    fetch("https://hobbies-server-side.vercel.app/hobbies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((hobbies_data) => {
        if (hobbies_data.acknowledged) {
          toast.success("List Has Been Added Successfully!");
          reset();
          refetch();
        }
      });
  };

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300 p-10">
          {/* name  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type="text"
                placeholder="Enter Your name"
                className="input rounded-none w-full "
                {...register("name", { required: true })}
              />
            </div>
            {errors.name?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild can't be empty
              </p>
            )}
          </div>
          {/* phone number  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type="tel"
                placeholder="Enter Your phone number"
                className="input rounded-none w-full "
                {...register("number", {
                  required: true,

                  pattern:
                    /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                })}
              />
            </div>
            {errors.number?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild cann't be empty
              </p>
            )}

            {errors.number?.type === "pattern" && (
              <p className=" text-red-800 text-center py-3">
                Phone Number must be validated
              </p>
            )}
          </div>
          {/* email  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type="email"
                placeholder="Enter Your email"
                className="input rounded-none w-full "
                {...register("email", { required: true })}
              />
            </div>
            {errors.email?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild can't be empty
              </p>
            )}
          </div>
          {/* hobbies  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type="text"
                placeholder="Enter Your hobbies"
                className="input rounded-none w-full "
                {...register("hobbies", { required: true })}
              />
            </div>
            {errors.hobbies?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild can't be empty
              </p>
            )}
          </div>

          <div className=" text-center">
            <button
              className="btn  bg-red-800 hover:bg-red-800 text-white border-0 w-[300px] md:w-[600px] lg:w-[800px] mx-auto "
              type="submit"
            >
              Save
            </button>
          </div>
        </form>

        <form method="dialog">
          <div className="modal-action -mt-40">
            <button className="btn bg-slate-600 hover:bg-slate-600 text-white">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default FromData;
