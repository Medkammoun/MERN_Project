import React from 'react';
import './allTeacher.css';

const AllTeachers = ({ teacher, setTeacher, delTeacher }) => {
    return (
        <div className='my-20'>
            <h1 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>All The Teachers</h1>
            <div style={{ display: "flex", justifyContent: "space-around", height: "200px" }} className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Is Allowed</th>
                            <th>Courses</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacher.map(teacher => (
                            <tr key={teacher._id}>
                                <td>{teacher.firstName}</td>
                                <td>{teacher.lastName}</td>
                                <td>{teacher.email}</td>
                                <td>{teacher.subject}</td>
                                <td>{teacher.is_available ? 'Yes' : 'No'}</td>
                                <td>{teacher.courses}</td>
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
                                        onClick={() => delTeacher(teacher._id)}
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

export default AllTeachers;
