import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { FcCheckmark } from 'react-icons/fc';
import { MdOutlineSpaceDashboard, MdAccessTimeFilled } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { BsExclamationLg } from 'react-icons/bs';


const Sidebar = () => {
    return (

        <aside class="w-96 m-4 mt-10 rounded-lg border-2" aria-label="Sidebar">

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
                <a href="#">
                    <img class="rounded-t-lg" src="https://www.schoolofems.org/wp-content/uploads/2018/11/Blank-EKG-Background.jpg" alt="" />
                    <img className='rounded-full w-24 absolute top-40 left-36' src="https://www.mawbiz.com.bd/application/views/talkwithdoctor/d-2/images/doctor/circle-image.jpg" alt="" />
                </a>
                <AiFillSetting className='absolute right-24 mt-2 text-violet-500'></AiFillSetting>
                <div class="p-3 pt-5 mt-10 flex items-center justify-center">
                    <h4 className='text-xl font-semibold text-center'>Doctor Julia</h4>
                    <FcCheckmark className='text-2xl ml-1'></FcCheckmark>
                </div>
                <h5 className='text-center text-violet-500 mb-4'>Orthopedic</h5>
            </div>

            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul class="space-y-2">
                    <li>
                        <a href="*" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <MdOutlineSpaceDashboard className="text-xl"></MdOutlineSpaceDashboard>
                            <span class="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="*" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <BsFillBookmarkFill className="text-xl"></BsFillBookmarkFill>
                            <span class="ml-3">My Booking</span>
                            <BsExclamationLg className="text-xl"></BsExclamationLg>
                        </a>
                    </li>
                    <li>
                        <a href="*" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <MdAccessTimeFilled className="text-xl"></MdAccessTimeFilled>
                            <span class="ml-3">Schedule Timing</span>
                        </a>
                    </li>
                    <li>
                        <a href="*" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <BsFillFileEarmarkTextFill className="text-xl"></BsFillFileEarmarkTextFill>
                            <span class="ml-3">Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="*" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FaMapMarkedAlt className="text-xl"></FaMapMarkedAlt>
                            <span class="ml-3">My Current Plan</span>
                        </a>
                    </li>


                </ul>
            </div>
        </aside>

    );
};

export default Sidebar;