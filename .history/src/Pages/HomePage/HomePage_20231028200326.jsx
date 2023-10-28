import { useHistory } from 'react-router-dom';
const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    history.push('/tabs/dummyTable');
  }, [history]);
  return;
};
export default HomePage;
