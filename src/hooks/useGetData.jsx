// import { useQuery } from "@tanstack/react-query";

// const useGetData = () => {
//   const { datas, refetch } = useQuery({
//     queryKey: ["datas"],
//     queryFn: async () => {
//       const response = await fetch("http://localhost:5000/hobbies", {
//         method: "GET",
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       console.log(response.json());
//       //   return response.json();
//     },
//   });
//   return [datas, refetch];
// };

// export default useGetData;
import { useQuery } from "@tanstack/react-query";

const useGetData = () => {
  const { data: datas, refetch } = useQuery({
    queryKey: ["datas"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/hobbies", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();

      return jsonData;
    },
  });
  return [datas, refetch];
};

export default useGetData;
