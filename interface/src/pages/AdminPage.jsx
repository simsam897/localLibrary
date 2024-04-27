"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const AdminPage = () => {
  return (
    <div className="pt-20 border-2 border-black">
      <Sidebar aria-label="Sidebar with call to action button example ">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col justify-start place-items-start   ">
            <Sidebar.Item className="border-2  border-black" href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>

            <Sidebar.Item  className="border-2  border-black"  href="#" icon={HiViewBoards}>
              ADD BOOKS
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              ADD USER
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              ISSUE BOOKS
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              RETURN
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              REVIEWS
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              ALL BOOKS
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>

            
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.CTA>
          {/* <div className="mb-3 flex items-center">
              <Badge color="warning">Beta</Badge>
              <button
                aria-label="Close"
                className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                type="button"
              >
                <svg
                  aria-hidden
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div> */}
        </Sidebar.CTA>
      </Sidebar>
    </div>
  );
};

export default AdminPage;
