// pages/add-venue.js
import React from 'react';

const VenueForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <form>
          <h2 className="text-2xl font-bold mb-6 text-black">Venue Details</h2>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter venue name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-light leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="type">
                Type
              </label>
              <select
                id="type"
                className="shadow appearance-none border rounded w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Restaurant">Restaurant</option>
                <option value="Bar">Bar</option>
                <option value="Cafe">Cafe</option>
                <option value="Theater">Theater</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
                <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="address">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    placeholder="Enter venue address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter venue name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter venue name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VenueForm;
