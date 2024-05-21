// pages/add-venue.js
import React from 'react';
import {Textarea} from "@nextui-org/input";

const VenueForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
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
            <textarea
                id="address"
                placeholder="Enter venue address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="description">
                Description
            </label>
            <textarea
                id="Description"
                placeholder="Enter venue Description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-Light mb-2" htmlFor="name">
              Location Url
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter venue Location Url"
              className="shadow appearance-none border rounded w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="images">
                Images
            </label>
            <div className="flex">
            <div className="flex">
                <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                className="shadow appearance-none border rounded w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                className="shadow appearance-none border rounded w-full py-2 px-3 font-light text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                
            </div>
            <div>
            <button
                type="button"
                className="w-full ml-4 bg-white border border-gray hover:bg-gray-200 text-black font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow"
                >
                Add Image
            </button>
            </div>
            </div>

            </div>
          
        </form>
      </div>
    </div>
  );
}

export default VenueForm;
