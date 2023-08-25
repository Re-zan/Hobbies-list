import ListDatas from "./ListDatas";
import useGetData from "./hooks/useGetData";
import FromData from "./FromData";
import { FaEnvelope, FaPlus } from "react-icons/fa";

const App = () => {
  //geting data from db
  const [datas, refetch] = useGetData();

  return (
    <div className="my_container my-20">
      {/* Data */}
      <div className="flex justify-between items-center">
        <h2>Total List: {datas?.length}</h2>
        <div>
          <button className="btn bg-blue-700 text-white">
            <FaEnvelope></FaEnvelope>
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
          <thead>
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
              ></ListDatas>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
