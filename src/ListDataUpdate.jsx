import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const ListDataUpdate = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, number, hobbies, email } = data;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/hobbies/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((hobbies_data) => {
        if (hobbies_data.modifiedCount > 0) {
          toast.success("List Data Has Been Updated Successfully!");
          navigate("/");
          reset();
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-300 p-10  my_container my-20"
    >
      {/* name  */}
      <div className="form-control w-full my-4">
        <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
          <input
            defaultValue={name}
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
            defaultValue={number}
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
            defaultValue={email}
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
            defaultValue={hobbies}
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
          Update
        </button>
      </div>
    </form>
  );
};

export default ListDataUpdate;
