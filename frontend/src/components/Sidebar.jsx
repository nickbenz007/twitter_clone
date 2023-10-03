import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import {
  FaChevronCircleDown,
  FaUserAlt,
  FaHome,
  FaListAlt,
  FaSignInAlt,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';

const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside>
      <div className="flex w-[275px] overflow-hidden h-screen items-center justify-center px-2 py-2 bg-black border-r border-gray-700">
        <div className="flex flex-col h-full items-start justify-between w-full">
          <div className="flex w-full">
            <Link
              to={'/'}
              className="hover:bg-gray-900 px-1 py-0.5 rounded-md transition delay-100 duration-100 hover:scale-105"
            >
              <img
                draggable={false}
                src="https://pbs.twimg.com/media/E7L7gX0VkAggMmu.jpg"
                className="object-contain w-16 h-14"
              />
            </Link>
          </div>
          {userInfo ? (
            <>
              <div className="flex flex-col h-full items-start justify-start my-2">
                <Link
                  to={'/'}
                  className="flex items-center px-4 py-2 my-3 transition delay-100 duration-100 hover:scale-105 rounded-full hover:bg-gray-900"
                >
                  <FaHome className="h-6 w-6 text-gray-50 mr-4" />
                  <span className="text-xl text-gray-100 font-semibold tracking-wider">
                    Home
                  </span>
                </Link>
                <Link
                  to={'/profile'}
                  className="flex items-center px-4 py-2 my-3 transition delay-100 duration-100 hover:scale-105 rounded-full hover:bg-gray-900"
                >
                  <FaUserAlt className="h-6 w-6 text-gray-50 mr-4" />
                  <span className="text-xl text-gray-100 font-semibold tracking-wider">
                    Profile
                  </span>
                </Link>
                <Link
                  to={'/'}
                  className="flex items-center px-4 py-2 my-3 transition delay-100 duration-100 hover:scale-105 rounded-full hover:bg-gray-900"
                >
                  <FaListAlt className="h-6 w-6 text-gray-50 mr-4" />
                  <span className="text-xl text-gray-100 font-semibold tracking-wider">
                    Lists
                  </span>
                </Link>
                <Link
                  to={'/'}
                  className="px-4 py-2 my-4 transition delay-100 duration-100 hover:scale-105 rounded-full hover:bg-gray-900"
                >
                  <span className="text-xl text-gray-100 font-semibold tracking-wider">
                    ... More
                  </span>
                </Link>
                <div className="flex items-center justify-center mt-20">
                  <button
                    type="submit"
                    className="w-56 px-10 py-3 text-xl text-gray-100 font-bold focus:outline-none bg-sky-400 border ring-0 border-gray-700 hover:bg-sky-500 rounded-full hover:border-gray-100"
                  >
                    Post
                  </button>
                </div>
              </div>
              <Menu as="div" className="relative inline-block w-full text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col items-start">
                        <span className="text-gray-100 text-lg font-semibold tracking-wide">
                          {userInfo.name}
                        </span>
                        <small className="text-gray-100 text-md font-normal tracking-wide">
                          {userInfo.email}
                        </small>
                      </div>
                      <FaChevronCircleDown
                        className="h-5 w-5 text-gray-50"
                        aria-hidden="true"
                      />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute -top-4 transform -translate-y-full right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black border border-gray-700 ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={'/profile'}
                            className={classNames(
                              active
                                ? 'bg-gray-900 text-gray-100'
                                : 'text-gray-100',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={'/logout'}
                            onClick={logoutHandler}
                            className={classNames(
                              active
                                ? 'bg-gray-900 text-gray-100'
                                : 'text-gray-100',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          ) : (
            <>
              <div className="flex w-full items-center justify-center">
                <div className="flex w-full justify-center items-center bg-black">
                  <Link
                    to={'/login'}
                    className="px-8 py-2 m-2 items-center border border-gray-700 bg-black hover:bg-gray-900 rounded-md transition delay-100 duration-100 hover:scale-105"
                  >
                    <div className="flex items-center justify-center p-1">
                      <FaSignInAlt className="h-4 w-4 text-green-500" />
                      <span className="ml-4 text-md text-gray-100 font-semibold tracking-wide">
                        Sign In
                      </span>
                    </div>
                  </Link>
                  <Link
                    to={'/register'}
                    className="px-8 py-2 m-2 items-center border border-gray-700 bg-black hover:bg-gray-900 rounded-md transition delay-100 duration-100 hover:scale-105"
                  >
                    <div className="flex items-center justify-center p-1">
                      <FaSignInAlt className="h-4 w-4 text-green-500" />
                      <span className="ml-4 text-md text-gray-100 font-semibold tracking-wide">
                        Sign Up
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="flex w-full h-full items-center justify-center">
                  <img
                    draggable={false}
                    src="https://pbs.twimg.com/media/E7L7gX0VkAggMmu.jpg"
                    className="object-cover"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
