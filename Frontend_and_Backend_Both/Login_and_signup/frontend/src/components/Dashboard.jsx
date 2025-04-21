import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

 
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();  // Force a reload
  };
  
  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
