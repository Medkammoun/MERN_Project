import React from 'react';
import './allUser.css';

const Allusers = ({ student, setter, delstudent }) => {
    return (
        <div style={{ marginBottom: '250px' }}>
            <h1 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>All The Users</h1>
            <div style={{ display: "flex", justifyContent: "space-around", height: "200px" }} className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Classes</th>
                            <th>Enrollments</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map(student => (
                            <tr key={student._id}>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.email}</td>
                                <td>{student.classes}</td>
                                <td>{student.enrollments}</td>
                                <td>
                                    <button
                                        style={{
                                            marginLeft: "20px",
                                            backgroundColor: "blue",
                                            color: "#fff",
                                            padding: "8px 16px",
                                            border: "none",
                                            cursor: "pointer",
                                            borderRadius: "4px",
                                        }}
                                        onClick={() => delstudent(student._id)}
                                    >
                                        Ban
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Allusers;
