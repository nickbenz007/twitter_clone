import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex w-full items-center justify-center py-24">
          <h1 className="text-5xl text-gray-900 font-extrabold">Sing In</h1>
        </div>
        <form onSubmit={handleForm} className="w-2/5">
          <div className="items-center justify-center">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 px-4 my-4 border border-gray-300 rounded-md bg-gray-100"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="text"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-4 my-4 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          {isLoading && <h1>Loading...</h1>}
          <button
            type="submit"
            className="w-40 h-12 mt-16 text-center rounded-xl bg-black text-gray-100 font-semibold text-lg hover:scale-110 transition delay-100 duration-150"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
