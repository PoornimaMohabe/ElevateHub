import { getAllMentor } from "../../utils/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const AllMentors = () => {
  const [mentors, setMentors] = useState([]);

  const fetchAllMentors = async () => {
    try {
      const response = await axios.get(getAllMentor);
      setMentors(response.data.all_Mentors);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllMentors();
  }, []);
  console.log(mentors);

  return (
    <div className="px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">All Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-violet-50 rounded-2xl shadow-md text-center p-5 w-10/12 max-w-sm mx-auto"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg">{mentor.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{mentor.role}</p>
            <p className="text-gray-500 text-s">{mentor.Designation}</p>
            <Link to={`/mentor/${mentor._id}`}>
              <Button
                colorScheme="blue"
                className="bg-blue-900 m-4 text-center hover:bg-blue-700 text-white shadow border rounded-md h-8 p-2 "
              >
                Know More
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMentors;
