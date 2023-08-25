import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/hobbies", {
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
        }

        console.log(hobbies_data);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Toaster position="top-center" reverseOrder={false} />
        {/* name  */}
        <div className="form-control w-full my-4">
          <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
            <input
              type="text"
              placeholder="Enter Your name"
              className="input rounded-none w-full "
              {...register("name", { required: true })}
            />
            <FaUserAlt className=" text-2xl mx-7 text-white"></FaUserAlt>
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
            <FaPhoneAlt className=" text-2xl mx-7 text-white"></FaPhoneAlt>
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
            <FaEnvelope className=" text-2xl mx-7 text-white"></FaEnvelope>
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
            <FaEnvelope className=" text-2xl mx-7 text-white"></FaEnvelope>
          </div>
          {errors.hobbies?.type === "required" && (
            <p className=" text-red-800 text-center py-3">
              This feild can't be empty
            </p>
          )}
        </div>

        <div className=" text-center">
          <button
            className="btn  bg-red-800 text-white border-0 w-[300px] md:w-[600px] lg:w-[800px] mx-auto "
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
