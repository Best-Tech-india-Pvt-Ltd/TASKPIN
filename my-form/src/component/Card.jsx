import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgPic from './Assets/Rectangle 1965.png';
import { useParams } from "react-router-dom";

function Card() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://6556eeecbd4bcef8b611d6fb.mockapi.io/users`
      );
      if (response.data) {
        setLoading(false);
        setUserData(response.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  const bannerStyle = {
    marginTop: "8px",
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
    padding: "24px",
  };

  const cardStyle = {
    border: "1px solid #e2e8f0",
    padding: "24px",
    borderRadius: "8px",
    display: "flex",
  };

  const imageContainerStyle = {
    width: "56px",
  };

  const contentContainerStyle = {
    width: "301px",
  };

  const buttonStyle = {
    width: "118px",
    height: "40px",
    backgroundColor: "#3490dc",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
  };

  return (
    <div style={bannerStyle}>
      {!loading ? (
        <>
          {userData.length > 0 &&
            userData.map((element) => (
              <div key={element.userId} style={cardStyle}>
                <div style={imageContainerStyle}>
                  <img src={ImgPic} alt="User" />
                </div>
                <div style={contentContainerStyle}>
                  <h2 className="text-xl font-semibold ">
                    {element.jobTitle}
                  </h2>
                  <div className="grid gap-6">
                    <div>
                      <p className="font-semibold">
                        {element.companyName}-{element.industry}
                      </p>
                      <p className="text-gray-700">
                        {element.location},{element.remoteType}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Part-Time (9.00 am - 5.00pm IST)</span> 
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold"> Experience({element.minExperience} -{element.maxExperience} Years)</span>
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">INR ($){element.minSalary}-{element.maxSalary}/ Month</span>
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{element.totalEmployee} employees</span>
                      </p>
                    </div>
                    <div>
                      <button style={buttonStyle}> Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </>
      ) : (
        <p className="text-center p-4 text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default Card;
