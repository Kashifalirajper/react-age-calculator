import React from "react";

const CalculateAge = ({ dob }) => {
  const parseDate = (dateString) => {
    const parts = dateString.match(/(\d{2})[-\/](\d{2})[-\/](\d{4})/);

    if (parts) {
      return new Date(parts[3], parts[2] - 1, parts[1]);
    } else {
      return new Date(dateString);
    }
  };

  const calculateAge = (dateString) => {
    const today = new Date();
    const birthDate = parseDate(dateString);

    if (isNaN(birthDate)) {
      throw new Error("Invalid date string");
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    const dayDiff = today.getDate() - birthDate.getDate();
    return {
      years: age,
      months: monthDiff >= 0 ? monthDiff : 12 + monthDiff,
      days:
        dayDiff >= 0
          ? dayDiff
          : new Date(today.getFullYear(), today.getMonth(), 0).getDate() +
            dayDiff,
    };
  };

  let ageDetails;
  try {
    ageDetails = dob && calculateAge(dob);
  } catch (error) {
    return <p>Error parsing date: {error.message}</p>;
  }

  return (
    <div>
      {ageDetails ? (
        <p>
          You are {ageDetails.years} years, {ageDetails.months} months, and{" "}
          {ageDetails.days} days old.
        </p>
      ) : (
        <p>Date of birth is missing or incorrect. Example format: "1990-01-01", "01-01-1999", or "01/01/1999".</p>
      )}
    </div>
  );
};

export default CalculateAge;
