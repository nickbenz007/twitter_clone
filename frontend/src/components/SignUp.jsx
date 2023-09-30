import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredential } from '../slices/authSlice';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleForm = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredential({ ...res }));
        navigate('/');
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex w-full items-center justify-center py-16">
          <h1 className="text-5xl text-gray-900 font-extrabold">Sing Up</h1>
        </div>
        <form onSubmit={handleForm} className="w-2/5">
          <div className="items-center justify-center">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full text-lg text-gray-800 py-4 px-4 my-4 border border-gray-300 rounded-md bg-gray-100"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-lg text-gray-800 py-4 px-4 my-4 border border-gray-300 rounded-md bg-gray-100"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-lg text-gray-800 py-4 px-4 my-4 border border-gray-300 rounded-md bg-gray-100"
            />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              value={confirmPassword}
              type="password"
              name="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full text-lg text-gray-800 py-4 px-4 my-4 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          {isLoading && <h1>Loading...</h1>}
          <button
            type="submit"
            className="w-40 h-12 mt-16 text-center rounded-xl bg-black text-gray-100 font-semibold text-lg hover:scale-110 transition delay-100 duration-150"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
