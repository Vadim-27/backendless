import { useHistory } from 'react-router-dom';
import us
const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    history.push('/tabs/dummyTable');
  }, [history]);
  return;
};
export default HomePage;
