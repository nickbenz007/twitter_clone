import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const GuestScreen = () => {
  return (
    <div className="flex min-h-screen w-4/5 items-center justify-center bg-black">
      <img
        draggable={false}
        src="https://pbs.twimg.com/media/E7L7gX0VkAggMmu.jpg"
        className="object-cover w-auto h-auto"
      />
      <div className="flex flex-col justify-center items-center bg-black">
        <Link
          to={'/login'}
          className="flex w-full px-8 py-4 m-4 items-center border border-gray-700 bg-black hover:bg-gray-900 rounded-md transition delay-100 duration-100 hover:scale-105"
        >
          <FaSignInAlt className="h-4 w-4 text-green-500" />
          <span className="ml-4 text-md text-gray-100 font-semibold tracking-wide">
            Sign In
          </span>
        </Link>
        <Link
          to={'/register'}
          className="flex w-full px-8 py-4 m-4 items-center border border-gray-700 bg-black hover:bg-gray-900 rounded-md transition delay-100 duration-100 hover:scale-105"
        >
          <FaSignInAlt className="h-4 w-4 text-green-500" />
          <span className="ml-4 text-md text-gray-100 font-semibold tracking-wide">
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
};

export default GuestScreen;
