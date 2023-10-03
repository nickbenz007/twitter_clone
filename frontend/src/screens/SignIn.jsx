import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredential } from '../slices/authSlice';
import { toast } from 'react-toastify';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredential({ ...res }));
      navigate('/');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-black">
      <div className="flex flex-col w-full items-center justify-center py-8">
        <Link to={'/'}>
          <img
            draggable={false}
            src="https://pbs.twimg.com/media/E7L7gX0VkAggMmu.jpg"
            className="object-cover w-32 h-32"
          />
        </Link>
        <h1 className="text-4xl text-gray-50 font-extrabold tracking-wide">
          SignIn
        </h1>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <form onSubmit={handleForm} className="w-2/5">
          <div className="items-center justify-center text-gray-50">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-3 my-4 text-gray-900 border border-gray-300 rounded-md bg-gray-100"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-3 my-4 text-gray-900 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          {isLoading && (
            <h1 className="text-xl text-gray-50 font-bold tracking-wider">
              Loading...
            </h1>
          )}
          <div className="flex w-full items-center justify-start py-4">
            <p className="text-gray-50 text-lg font-normal">
              Create your new account
            </p>
            <Link
              to={'/register'}
              className="text-sky-500 text-lg font-normal mx-4 hover:underline"
            >
              Sign Up
            </Link>
          </div>
          <button
            type="submit"
            className="w-32 h-12 mt-10 text-center hover:shadow-xl shadow-sky-500 border border-gray-700 rounded-xl bg-sky-500 text-gray-100 font-semibold text-lg hover:scale-105 transition delay-100 duration-100"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
