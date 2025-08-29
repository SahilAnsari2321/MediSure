import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import i1 from '../../assets/i1.png'
import { UserPen, History, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProfileDropdown({ mobile }) {
  const { user, logout } = useAuth();
  const [userIcon, setUserIcon] = useState(i1);
  const navigate = useNavigate();

  const imageNameFromDB = user.image;


  const handleLogout = () => {
    logout();
    toast.success('Successfully logged out!');
    navigate('/');
  };

  useEffect(() => {
    const imageUrl = `../${imageNameFromDB}.png`;
    setUserIcon(imageUrl);
  }, [imageNameFromDB]);

  return (<>
    {!mobile ? (
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex items-center space-x-3 rounded-full border border-gray-300 bg-gradient-to-r bg-blue-400 p-2 shadow-lg hover:scale-105 transform transition duration-200 ease-out">
            <img
              className="h-10 rounded-full border-2 border-white"
              src={userIcon}
              alt="User Avatar"
            />
            <span className="text-white font-semibold tracking-wide">
              Hi, {user.username.toUpperCase() || 'User'}
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-4 text-center border-b border-gray-200">
              <p className="text-sm text-gray-500">Welcome back!</p>
              <p className="text-lg font-medium text-gray-900">{user.username.toUpperCase()}</p>
            </div>
            <div className="py-2">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/profile"
                    className={`${active ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                      } flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition`}
                  >
                    <UserPen className="text-blue-500" />
                    <span>Your Profile</span>
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/history"
                    className={`${active ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                      } flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition`}
                  >
                    <History className="text-green-500" />
                    <span>History</span>
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${active ? 'bg-red-100 text-red-600' : 'text-gray-700'
                      } flex items-center space-x-3 px-4 py-2 text-sm rounded-lg w-full text-left transition`}
                  >
                    <LogOut className="text-red-500" />
                    <span>Sign out</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
      : <>
     
        <div className="flex items-center space-x-3 mb-4">
          <img
            className="h-12 w-12 rounded-full"
            src={userIcon || '/images/default-avatar.png'}
            alt="User Avatar"
          />
          <div>
            <p className="text-sm text-gray-500">Welcome back!</p>
            <p className="text-lg font-medium text-gray-900">{user.username.toUpperCase()}</p>
          </div>
        </div>
        <div className="space-y-2 ">

        <NavLink
            to="/profile"
            className="flex items-center space-x-3 px-4 py-2 text-sm rounded-lg hover:bg-gray-200 transition"
          >
            <UserPen className="text-blue-500" />
            <span>Profile</span>
          </NavLink>
          
          <NavLink
            to="/history"
            className="flex items-center space-x-3 px-4 py-2 text-sm rounded-lg hover:bg-gray-200 transition"
          >
            <History className="text-green-500" />
            <span>History</span>
          </NavLink>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-2 text-sm rounded-lg hover:bg-gray-200 w-full text-left transition"
          >
            <LogOut className="text-red-500" />
            <span>Sign out</span>
          </button>
        </div>
      
        
      </>
    }
  </>
  );
}
