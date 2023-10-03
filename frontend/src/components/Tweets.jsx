import { useState } from 'react';
import { Follow } from './Follow';
import { Follower } from './Follower';

export const Tweets = () => {
  const [activeButton, setActiveButton] = useState('Follow');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex flex-col h-screen overflow-y-auto">
      <div className="flex flex-col w-full items-start justify-start bg-black">
        <h1 className="text-xl text-gray-50 font-semibold tracking-wider mx-4 my-4">
          Home
        </h1>
        <div className="flex w-full h-14 border-b border-gray-700 items-center justify-between my-2">
          <button
            onClick={() => handleButtonClick('Follow')}
            type="submit"
            className="flex h-full w-full items-center justify-center text-gray-50 text-lg font-normal tracking-wide hover:bg-gray-900"
          >
            Follow
          </button>
          <button
            onClick={() => handleButtonClick('Follower')}
            type="submit"
            className="flex h-full w-full items-center justify-center text-gray-50 text-lg font-normal tracking-wide hover:bg-gray-900"
          >
            Follower
          </button>
        </div>
      </div>
      {activeButton === 'Follow' && <Follow />}
      {activeButton === 'Follower' && <Follower />}
    </div>
  );
};
