import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const HomePage = () => {
  const history = useNavigate();
  useEffect(() => {
    history.push('/tabs/dummyTable');
  }, [history]);
  return null;
};
export default HomePage;
