import { useState, FormEvent, ChangeEvent } from "react";
import { UserData } from "../interfaces/userData";
import { newUser } from "../interfaces/newUser";

const UserSignup = () => {
  // State to manage the login form data
  const [signupData, setSignupData] = useState<newUser>({
    username: "",
    email: "",
    password: "",
  });
};
  const [loginData, setLoginData] = useState<UserData>({
    username: "",
    password: "",
  });

  // Handle changes in the input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  // Handle form submission for login
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

//     // Call the signup API endpoint with signupData    
//     // Create a new user with the signupData
//     // Store the signupData in the database
//     // Set signupData as loginData
//     // Call the login API endpoint with loginData
//     // If login is successful, call Auth.login to store the token in localStorage

//     try {
//       // Call the signup API endpoint with signupData
//       const data = await signup(signupData);
//       // If signup is successful, call Auth.login to store the token in localStorage
//       Auth.login(data.token);
//     } catch (err) {
//       console.error("Failed to signup", err); // Log any errors that occur during signup
//     }

//     setSignupData({ username: "", password: "" }); // Reset the form
    
//   };

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//           Sign up!
//         </h2>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             action="#"
//             method="POST"
//             className="space-y-6"
//             onSubmit={handleSubmit}
//           >
//             <div>
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Username
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   value={signupData.username || ""}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={signupData.email || ""}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a
//                     href="#"
//                     className="font-semibold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   value={signupData.password || ""}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign up
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Already have an account?{" "}
//             <a
//               href="#"
//               className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//             >
//               Login now
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
