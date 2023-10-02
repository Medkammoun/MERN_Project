import React,{useState} from 'react'

const Studentmid = () => {
  const [activeTab, setActiveTab] = useState('account');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="your-tab-list w-full bg-white p-6 rounded shadow-md">
        <div className="tab-buttons mb-4 flex space-x-4">
          <button
            className={`tab-button ${activeTab === 'account' ? 'active' : ''
              } account-tab-button`}
            onClick={() => handleTabClick('account')}
          >
            My Account
          </button>
          <button
            className={`tab-button ${activeTab === 'scheduled-courses' ? 'active' : ''
              } scheduled-courses-tab-button`}
            onClick={() => handleTabClick('scheduled-courses')}
          >
            Scheduled Courses
          </button>
          <button
            className={`tab-button ${activeTab === 'courses' ? 'active' : ''
              } courses-tab-button`}
            onClick={() => handleTabClick('courses')}
          >
            Courses
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'account' && (
            <table className="table w-full">
              <thead style={{ background: '#0a276c', color: 'white' }}>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Classes</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td>John</td>
                  <td>Johnny</td>
                  <td>Johnny@gmail.com</td>
                  <td>Fifth</td>
                  <td className=""></td>
                </tr>
              </tbody>
            </table>
          )}
          {activeTab === 'scheduled-courses' && (
            <table className="table w-full">
              <thead style={{ background: '#0a276c', color: 'white' }}>
                <tr >
                  <th>Appointment</th>
                  <th>Class Grade</th>
                  <th>Title</th>
                  <th>Available Dates</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Review Note</th>
                  <th>Review Comment</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td>30/10/2023</td>
                  <td>class Grade</td>
                  <td>title</td>
                  <td>any time</td>
                  <td>200</td>
                  <td>1h</td>
                  <td>20</td>
                  <td>very good</td>
                  <td className=""></td>
                </tr>
              </tbody>
            </table>
          )}
          {activeTab === 'courses' && (
            <table className="table w-full">
              <thead style={{ background: '#0a276c', color: 'white' }}>
                <tr>
                  <th>Class Grade</th>
                  <th>Title</th>
                  <th>Available Dates</th>
                  <th>Price</th>
                  <th>Duration</th>
                  <th>Review Note</th>
                  <th>Review Comment</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center'>
                  <td>class Grade</td>
                  <td>title</td>
                  <td>any time</td>
                  <td>200</td>
                  <td>1h</td>
                  <td>20</td>
                  <td>very good</td>
                  <td className=""></td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Studentmid