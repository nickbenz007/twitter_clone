import { Link } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';

export const Follower = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="relative flex flex-col h-screen items-start justify-start bg-black">
      <div className="flex flex-col px-2 py-2 items-end justify-center">
        <div className="inline-flex items-start justify-center">
          <img
            src={'https://www.perkosis.com/uploads/staffs/big/9.jpg'}
            className="object-cover w-10 h-10 rounded-full"
            alt="User Image"
          />
          <textarea
            name="post"
            id="post"
            cols="50"
            rows="10"
            maxLength={200}
            placeholder="What is happening?"
            className="h-32 mx-3 px-3 py-3 focus:outline-none text-lg text-gray-50 bg-black rounded-lg border border-gray-700"
          />
        </div>
        <button className="px-6 py-1 my-2 rounded-full text-lg text-gray-50 bg-sky-400 font-semibold tracking-wide transition duration-100 delay-100 hover:scale-105">
          Post
        </button>
      </div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-full mx-2 my-2 bg-black rounded-lg border border-gray-700 shadow-xl items-start justify-between p-4"
          >
            <div className="flex w-full items-center justify-start">
              <Link to={'#'}>
                <img
                  draggable={false}
                  src="https://www.perkosis.com/uploads/staffs/big/9.jpg"
                  className="object-cover w-10 h-10 rounded-full"
                />
              </Link>
              <div className="flex flex-col mx-2">
                <Link
                  to={'#'}
                  className="text-gray-50 text-md font-semibold tracking-wide hover:underline transition delay-75 duration-75"
                >
                  Person Name
                </Link>
                <div className="flex w-full items-center justify-start">
                  <p className="text-sm text-gray-50 font-normal">
                    Description of the Post
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start py-2 px-2">
              <Link className="flex items-center jsutify-center">
                <FaHeartbeat className="h-5 w-5 text-pink-500 hover:scale-105" />
                <small className="mx-2 text-gray-50 text-md font-normal">
                  1
                </small>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
