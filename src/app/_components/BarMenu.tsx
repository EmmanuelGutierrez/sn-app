import { useLogout } from '@/hooks/logout';
import { useAppStore } from '@/store/App/useAppStore';
import clsx from 'clsx';
import React from 'react';

const BarMenu = () => {
    const {userMenu}=useAppStore(s=>s)
    const logout=useLogout()
    const menuClass = clsx(
      `transition-transform  absolute z-30 my-4 text-base top-10 right-[-12rem] text-gray list-none bg-white border-solid border-gray divide-y divide-gray-100 rounded shadow `,
      { "-translate-x-none": !userMenu },
      { "-translate-x-full": userMenu }
    );
    return (
      <div className={menuClass} id="dropdown-user">
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900 dark:text-white" role="none">
            Neil Sims
          </p>
          <p
            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
            role="none"
          >
            neil.sims@flowbite.com
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
              onClick={() => logout()}
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    );
};

export default BarMenu;