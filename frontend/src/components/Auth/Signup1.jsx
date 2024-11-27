import { useState } from "react";

function Signup1() {
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [number , setNumber] = useState('')
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [role , setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Create a FormData object to hold form values and file
        const formData = new FormData();
        formData.append('fullname', name);
        formData.append('email', email);
        formData.append('phoneNumber', number);
        formData.append('password', password);
        formData.append('role', role);
        
        // Add the profile photo to FormData as profilePhoto
        if (file) {
          formData.append('profilePhoto', file);
        }
    
        try {
            const response = await fetch('http://localhost:8000/api/v1/user/register', {
                method: 'POST',
                body: formData,  // Send FormData instead of JSON
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Signup Successful: ", data);
            } else {
                console.log(data.message, "Sign up failed");
            }
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
  
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="r1" className="ml-2 text-gray-700">Student</label>
              </div>
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={role === 'recruiter'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="r1" className="ml-2 text-gray-700">Recruiter</label>
              </div>
              <div className="flex items-center gap-2">
              <label>Profile</label>
              <input accept="image/*"  onChange={(e) => setFile(e.target.files[0])} type="file"  className="cursor-pointer" />
            </div>
            </div>
  
            <button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Signup1;
  