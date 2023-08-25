import { toast } from "react-hot-toast";

const ListDatas = ({ datas, index }) => {
  const { _id, name, number, email, hobbies } = datas;

  //delete data
  const handleDeleteData = () => {
    fetch(`http://localhost:5000/hobbies/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully!");
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
        {" "}
        <button>edit</button>{" "}
        <button onClick={() => handleDeleteData(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ListDatas;
