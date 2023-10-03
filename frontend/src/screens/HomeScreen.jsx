import { Tweets } from '../components/Tweets';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import GuestScreen from '../screens/GuestScreen';
import Trending from '../components/Trending';

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="flex min-w-6xl items-center justify-center bg-black">
      {userInfo ? (
        <>
          <Sidebar />
          <Tweets />
          <Trending />
        </>
      ) : (
        <>
          <GuestScreen />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
