import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 h-screen  " >
      <div className="mx-8 max-w-270">
      <div className="flex flex-col  ">
       <h1 className=" text-2xl font-bold text-gray-800   flex ">
     Profile
          </h1>   
       </div>
        <div className="flex flex-col items-left mt-4 w-full  mb-6  ">

        
      <div className="rounded-sm border  md:w-1/2 sm:w-full max-sm:w-full mb-12 lg:w-1/2 border-stroke bg-white shadow-default ">
        <div className="border-b border-stroke  px-7 py-4 ">
          <h3 className="font-medium text-black flex">
           Personal Information
          </h3>
        </div>
        <div className="p-10 ">
          <form>
            <div className="flex flex-col items-center">
            <div className="w-full flex flex-col item-center">
                <div className="flex flex-col item-center mb-2 ">
                  <label
                    className=" text-sm font-medium text-slate-800 mb-2    "
                    for="fullName"
                  >
                    First Name
                  </label>
                  <input
                    className="rounded border border-stroke bg-gray px-4 py-3 font-medium text-black outline-blue-500 bg-[#eff4fb] "
                    type="text"
                    placeholder=" Enter the FirstName "
                  />
                </div>
              </div>
              <div className="w-full flex flex-col item-center">
                <div className="flex flex-col item-center mb-2 ">
                  <label
                    className=" text-sm font-medium text-slate-800 mb-2    "
                    for="fullName"
                  >
                    Last Name
                  </label>
                  <input
                    className="rounded border border-stroke bg-gray px-4 py-3 font-medium text-black outline-blue-500 bg-[#eff4fb] "
                    type="text"
                    placeholder=" Enter the Last Name "
                  />
                </div>
              </div>
              <div className="w-full flex flex-col item-center">
                <div className="flex flex-col item-center mb-2 ">
                  <label
                    className=" text-sm font-medium text-slate-800 mb-2    "
                    for="fullName"
                   
                  >
                    Full Name
                  </label>
                  <input
                    className="rounded border border-stroke bg-gray px-4 py-3 font-medium text-black outline-blue-500 bg-[#eff4fb] "
                    type="text"
                    placeholder=" Enter the FullName "
                  />
                </div>
              </div>
              <div className="w-full  block mt-2  mb-2">
                <label
                  className="mb-3 block text-sm font-medium text-slate-800"
                  for="user"
                >
                  Username
                </label>
                <input
                  className="w-full block  rounded border border-stroke bg-gray px-4 py-3 font-medium text-black outline-blue-500 bg-[#eff4fb] "
                  type="text"
                  placeholder=" Enter the UserName "
                />
              </div>
              <div className="w-full flex flex-col item-center">
                <div className="flex flex-col item-center mb-2 ">
                  <label
                    className=" text-sm font-medium text-slate-800 mb-2    "
                    for="fullName"
                  >
                   Nick Name
                  </label>
                  <input
                    className="rounded border border-stroke bg-gray px-4 py-3 font-medium text-black outline-blue-500 bg-[#eff4fb] "
                    type="text"
                    placeholder=" Enter the NickName "
                  />
                </div>
              </div>
              <div className="w-full  block mt-2  mb-2">
                <label
                  className="mb-3 block text-sm font-medium text-slate-800"
                  for="phoneNumber" 
                >
                  Phone Number
                </label>
                <input
                  className="w-full block  rounded border border-stroke bg-gray px-4 py-3 font-medium bg-[#eff4fb] text-black outline-blue-500  "
                  type="text" placeholder=" Enter the number"
                />
              </div>
              <div className="w-full block mt-2  mb-2">
                <label
                  className="mb-3 block text-sm font-medium text-slate-800"
                  for="Email Address" 
                >
                  Email Address
                </label>
                <input
                  className="w-full block  rounded border border-stroke bg-gray px-4 py-3 font-medium text-black bg-[#eff4fb] outline-blue-500 "
                  type="email" placeholder=" Enter the Email "
                />
              </div>
              
              <div className="w-full  block mt-2  mb-2">
                <label
                  className="mb-3 block text-sm font-medium text-slate-800"
                  for="bio"
                >
                  Biographical Information
                </label>
                <textarea
                  className="w-full block  rounded border border-stroke bg-gray px-4 py-3 font-medium text-black outline-blue-500 bg-[#eff4fb] "
                  type="text" id="bio"
                />
              </div>
              <div className="w-full  block mt-2  mb-2">
                <label
                  className="mb-3 block text-sm font-medium text-slate-800"
                  for="FileUpload"
                >
                  Profile Picture
                </label>
                <div className="border border-slate-200 p-6">
                <div className="mb-4 flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
								style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg")' }}
							 >
                         
                          </div>
                          <div>
                            <span className="mb-1.5 font-medium text-gray-600  ">Edit your photo</span>
                            <span className="flex gap-2.5 ">
                              <button className="text-sm  text-gray-400 font-medium hover:text-red-600">
                                Delete
                              </button>
                              <button className="text-sm   text-gray-400 font-medium hover:text-green-600">
                                Update
                              </button>
                            </span>
                          </div>
                        
                        </div>

                <div
                  id="FileUpload"
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-blue-800 bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5"
                >
                  <input
                    type="file"
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                  />
                  <div className="flex flex-col items-center justify-center space-y-3 text-slate-400">
                    <p className="text-sm font-medium">
                      <span className="text-primary">Click to upload</span>
                      or drag and drop
                    </p>
                    <p className="mt-1.5 text-sm font-medium">
                      SVG, PNG, JPG or GIF
                    </p>
                    <p className="text-sm font-medium">(max, 800 X 800px)</p>
                  </div>
                </div>
                </div>
               
              </div>
              <div className="w-full  block mt-2  mb-2">
                <label
                  className="mb-3 block text-sm font-medium text-slate-800"
                  for="bio"
                >
                Password
                </label>
                <input
                  className="w-full block  rounded border border-stroke bg-gray px-4 py-3 font-medium text-black outline-blue-500 bg-[#eff4fb] "
                  type="password" id="bio"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-5">
                          <button className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white" type="submit">
                            Cancel
                          </button>
                          <button className=" ml-2 flex justify-center rounded bg-blue-800 text-white px-6 py-2 font-medium text-gray hover:bg-opacity-90" type="submit">
                            Save
                          </button>
                        </div>
          </form>
        </div>
      </div>
    </div>
      </div>
      </div>
  );
};

export default Profile;
