import ListDatas from "./ListDatas";
import useGetData from "./hooks/useGetData";
import FromData from "./FromData";
import { FaEnvelope, FaPlus } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import logo from "./assets/logo.jpg";

const App = () => {
  //geting data from db
  const [datas, refetch] = useGetData();

  //send data to the email
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
  const sendEmail = () => {
    const emailContent = selectedRows
      .map((id) => {
        const selectedData = datas.find((data) => data._id === id);
        return `Name: ${selectedData.name}, Number: ${selectedData.number}, Email: ${selectedData.email}, Hobbies: ${selectedData.hobbies}`;
      })
      .join("\n");

    const serviceId = "service_70r69ar";
    const templateId = "template_j8gwcce";
    const userId = "ktHZ6yBzkKZlDmhQM";

    const emailParams = {
      to_email: "info@redpositive.in",
      subject: "Selected Data",
      content: emailContent,
    };

    emailjs
      .send(serviceId, templateId, emailParams, userId)
      .then((response) => {
        if (response.status === 200) {
          toast.success("List Datas Send Successfully!");
        }
      })
      .catch((error) => {
        toast.error("Error sending email:", error);
      });
  };

  return (
    <div className="my_container my-20">
      <img
        src={logo}
        alt="logo"
        className=" h-24 w-24 mx-auto animate-pulse mb-3"
      />
      {/* Data */}
      <div className="flex justify-between items-center my-4">
        <h2 className=" text-xl font-bold">Total List: {datas?.length}</h2>
        <div>
          <button
            className="btn bg-blue-700 text-white hover:bg-blue-700 "
            onClick={sendEmail}
          >
            <FaEnvelope>send</FaEnvelope>
          </button>
          <button
            className="btn btn-neutral text-white  ml-2"
            onClick={() => window.my_modal_5.showModal()}
          >
            <FaPlus></FaPlus>
          </button>
          <FromData refetch={refetch}></FromData>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" text-base font-semibold">
            <tr>
              <th>
                <label></label>
              </th>
              <th>Serial Number</th>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Hobbies</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {datas?.map((data, index) => (
              <ListDatas
                key={data._id}
                data={data}
                index={index}
                refetch={refetch}
                isSelected={selectedRows.includes(data._id)}
                onSelect={() => handleRowSelect(data._id)}
              ></ListDatas>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
