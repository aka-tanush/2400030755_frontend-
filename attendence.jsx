import React, { useState } from "react";

export default function AttendanceTracker() {
  // Step 1: List of students
  const students = ["Aarav", "Diya", "Rohan", "Meera", "Karan"];

  // Step 2: State for attendance (true = present, false = absent)
  const [attendance, setAttendance] = useState(
    new Array(students.length).fill(false)
  );

  // Step 3: Handle individual checkbox toggle
  const handleCheckboxChange = (index) => {
    const updated = [...attendance];
    updated[index] = !updated[index];
    setAttendance(updated);
  };

  // Step 4: Mark all present
  const markAllPresent = () => {
    setAttendance(new Array(students.length).fill(true));
  };

  // Step 5: Mark all absent
  const markAllAbsent = () => {
    setAttendance(new Array(students.length).fill(false));
  };

  // Step 6: Count total present
  const totalPresent = attendance.filter((isPresent) => isPresent).length;

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        width: "300px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>🎓 Attendance Tracker</h2>

      {students.map((student, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <label>
            <input
              type="checkbox"
              checked={attendance[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            {student}
          </label>
        </div>
      ))}

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={markAllPresent}
          style={{
            marginRight: "10px",
            backgroundColor: "green",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Mark All Present
        </button>

        <button
          onClick={markAllAbsent}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Mark All Absent
        </button>
      </div>

      <h3 style={{ marginTop: "20px" }}>
        ✅ Total Present:{" "}
        <span style={{ color: "green" }}>{totalPresent}</span>
      </h3>
    </div>
  );
}
