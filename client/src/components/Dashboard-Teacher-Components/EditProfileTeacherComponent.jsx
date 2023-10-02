import React, {useState} from 'react'
import ChoseAvatar from '../../views/Registration/ChoseAvatar'
import { avatarList } from '../../views/Registration/AvatarList';
import { Link } from 'react-router-dom';
import dashteacher from '../../assets/tracherPhotos/dashteacher.jpg'
import axios from 'axios'
const EditTeacher = ({ user, setter, operation }) => {

    const [pic, setPic] = useState (0)

  return (
<>
<div  styles={{ backgroundImage:`url(${dashteacher})` }}>

<section class="bg-gray-50 dark:bg-gray-900 mt-24">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Edit Profile
                            </h1>
                            <form
                                class="space-y-4 md:space-y-6"
                                onSubmit={(e) => operation(e, user)}
                            >
                                <div>
                                    <label
                                        class="block  mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        First Name
                                    </label>
                                    <input

                                        onChange={(e) =>
                                            setter({
                                                ...user,
                                                firstName: e.target.value,
                                            })
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="firstName"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setter({
                                                ...user,
                                                lastName: e.target.value,
                                            })
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="lastName"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setter({
                                                ...user,
                                                email: e.target.value,
                                            })
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className='flex flex-row justify-between'>
                                <ChoseAvatar setPic={setPic} pic={pic} />
                                {pic !=0 &&  <img src={avatarList[pic-1]} className="rounded-full cursor-pointer" width={60}/>}
                                </div>
                                
                                <div>
                                    <label
                                        for="class"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Subject
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setter({
                                                ...user,
                                                subject: e.target.value,
                                            })
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option value="Math">Math</option>
                                        <option value="Physics">Physics</option>
                                        <option value="Mern">Mern</option>
                                        <option value="Science">Science</option>
                                        <option value="History">History</option>
                                        <option value="Geography">Geography</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        onChange={(e) =>
                                            setter({
                                                ...user,
                                                password: e.target.value,
                                            })
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        onChange={(e) =>
                                            setter({
                                                ...user,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </div>
                             
                                <button
                                    type="submit"
                                    class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                   Update Profile
                                </button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </section>



</div>
      
        </>
  )
}

export default EditTeacher