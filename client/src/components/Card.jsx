import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { ALL_CHARITIES } from "../utils/queries";

const Card = () => {
<<<<<<< HEAD
    return ( 
        <div type="card" data-modal-toggle="defaultModal">
            <div className="flex flex-row flex-wrap">
                {/* Card 1 */}
                <div className="mx-1 max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        <img className="rounded-t-lg" src="https://www.cdc.gov/stem/image/CMDDC.png?_=40466" alt="" />
                    </a>
                    <div className="p-5">
                        <span className="mb-1 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                            Healthcare
                            </span>
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Name orginization
                                </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                            <Link to="/" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Save
                            </Link>
                            <Link to="/donation" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                            Donate
                            </Link>
                    </div>
                </div>
=======
  const { loading, data } = useQuery(ALL_CHARITIES);
  const charities = data?.charities || [];
  return (
    <div type="card" data-modal-toggle="defaultModal">
      {charities.map((charity) => (
        <div className="flex flex-row flex-wrap">
          {/* Card 1 */}
          <div className="mx-1 max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
              <img className="rounded-t-lg" src={charity.imgLink} alt="" />
            </a>
            <div className="p-5">
              <span className="mb-1 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                Healthcare
              </span>
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {charity.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {charity.link}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {charity.ein}
              </p>
              <Link
                to="/"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Save
              </Link>
              <Link
                to="/donation"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Donate
              </Link>
            </div>
          </div>
>>>>>>> 04c453edb14f9409a1bba5cbf9fda86a8fc4c59d
        </div>
      ))}
    </div>
  );
};

export default Card;
