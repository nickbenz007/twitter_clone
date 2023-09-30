import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { FaSignInAlt, FaUserCheck, FaChevronCircleDown } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
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
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <div className="flex w-full h-20 items-center justify-center mx-auto bg-gray-700">
        <div className="flex lg:w-3/4 sm:w-full h-full items-center">
          <div className="flex-1">
            <Link
              to={'/'}
              className="hover:bg-gray-900 p-3 rounded-md transition delay-150 duration-150 hover:scale-105"
            >
              <span className="text-xl text-gray-100 font-semibold">
                Twitter Clone
              </span>
            </Link>
          </div>
          {userInfo ? (
            <>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <FaUserCheck className="h-5 w-5 text-green-600" />
                    {userInfo.name}
                    <FaChevronCircleDown
                      className="-mr-1 h-5 w-5 text-red-800"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={'/profile'}
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {userInfo.name}
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
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
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
            <div className="flex justify-center items-center">
              <Link
                to={'/login'}
                className="flex flex-row items-center mx-4 hover:bg-gray-900 p-2 rounded-md transition delay-150 duration-150 hover:scale-105"
              >
                <FaSignInAlt className="h-4 w-4 text-green-500" />
                <span className="mx-2 text-md text-gray-100 font-semibold">
                  Sign In
                </span>
              </Link>
              <Link
                to={'/register'}
                className="flex flex-row items-center mx-4 hover:bg-gray-900 p-2 rounded-md transition delay-150 duration-150 hover:scale-105"
              >
                <FaSignInAlt className="h-4 w-4 text-green-500" />
                <span className="mx-2 text-md text-gray-100 font-semibold">
                  Sign Up
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
