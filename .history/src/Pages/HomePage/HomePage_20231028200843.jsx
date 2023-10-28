import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const HomePage = () => {
  const history = useNavigate();
  useEffect(() => {
    navigate('/tabs/dummyTable');
  }, [navigate]);
  return null;
};
export default HomePage;
