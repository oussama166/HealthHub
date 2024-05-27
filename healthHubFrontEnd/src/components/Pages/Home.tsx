import  pic from '../../assets/Home-page-Nurse-pic.jpg';
export const Home = () => {
    return (

      <div className="container mx-auto p-6">
        {/* Top section with image and text */}
        <div className="flex flex-col md:flex-row  md:items-start mb-8">
          {/* Text section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl  font-bold mb-4">Welcome to Our HealtHub Portal</h1>
            <p className="text-lg mb-4">Our platform provides a seamless and efficient way to connect patients with doctors for consultations. <br />
            Here’s what you can do: <br /><ul>
                <ol>Search for Doctors: Patients can easily search for doctors based on specialty, location, availability, and ratings. Our user-friendly search functionality ensures that you find the right doctor for your needs quickly and conveniently.</ol>
                <ol>Book Consultations: Once you've found the right doctor, you can book an appointment directly through our platform. Our system supports both in-person and virtual consultations, offering flexibility to suit your preferences.</ol>
                <ol>Doctor's Dashboard: Doctors have access to a personalized dashboard where they can view a list of patients who have scheduled appointments with them. This dashboard provides detailed information about each patient, their medical history, and previous consultations, helping doctors prepare better for their appointments.</ol>
                </ul></p>
            <button className="bg-healthHub-700 text-white py-2 px-4 rounded">Get Started</button>
          </div>
          {/* Image section */}
          <div className="w-full md:w-1/2">
            <img src={pic} alt="Placeholder" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Information columns */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-bold mb-2">Column 1</h2>
            <p className="text-gray-700">Detailed information about the first topic goes here. This section can include any relevant content.</p>
          </div>
          {/* Column 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-bold mb-2">Column 2</h2>
            <p className="text-gray-700">Detailed information about the second topic goes here. This section can include any relevant content.</p>
          </div>
          {/* Column 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-bold mb-2">Column 3</h2>
            <p className="text-gray-700">Detailed information about the third topic goes here. This section can include any relevant content.</p>
          </div>
        </div>
      </div>
   );
};
