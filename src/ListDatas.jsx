import { toast } from "react-hot-toast";
import { FaRegCalendarTimes, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListDatas = ({ data, index, refetch }) => {
  const { _id, name, number, email, hobbies } = data;

  //delete data
  const handleDeleteData = () => {
    fetch(`http://localhost:5000/hobbies/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully!");
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{++index}</td>
      <td>{name}</td>
      <td>{number}</td>
      <td>{email}</td>
      <td>{hobbies}</td>
      <td>
        <Link to={`/${_id}`}>
          <button className="btn btn-accent">
            <FaRegEdit></FaRegEdit>
          </button>
        </Link>{" "}
        <button
          onClick={() => handleDeleteData(_id)}
          className=" btn bg-red-800 hover:bg-red-800 text-white"
        >
          <FaRegCalendarTimes></FaRegCalendarTimes>
        </button>
      </td>
    </tr>
  );
};

export default ListDatas;
