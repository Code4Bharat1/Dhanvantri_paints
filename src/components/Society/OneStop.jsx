export default function OrderForm() {
    return (
      <div className="flex justify-center items-center my-10 bg-gray-50 px-4">
        <div className="bg-white p-8  w-[1200px]">
          <h2 className="text-4xl font-bold text-center mb-20">
            One Stop Shop For All Your Printing Needs <br /> Let Us Help You Today!
          </h2>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-5">
              <label className="block text-gray-700 font-medium text-2xl">Your Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
  
            {/* Email */}
            <div className="flex flex-col gap-5">
              <label className="text-2xl block text-gray-700 font-medium">Your Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
  
            {/* Phone */}
            <div className="flex flex-col gap-5">
              <label className="block text-2xl text-gray-700 font-medium">Your Phone*</label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
  
            {/* Services Dropdown */}
            <div className="flex flex-col gap-5">
              <label className="block text-2xl text-gray-700 font-medium">Services*</label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Choose Services</option>
                <option>Printing</option>
                <option>Designing</option>
                <option>Marketing Materials</option>
              </select>
            </div>
  
            {/* Message */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <label className="block text-2xl text-gray-700 font-medium">Message (optional)</label>
              <textarea
                rows="4"
                placeholder="Enter message"
                className="resize-none w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
  
            {/* File Upload */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <label className="block text-2xl text-gray-700 font-medium">Upload File</label>
              <input type="file" className="w-25 border bg-gray-200 border-gray-600 text-gray-600 px-3 py-2 rounded-[10px]" />
            </div>
  
            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-start">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-sm hover:bg-orange-600 transition"
              >
                Request Order
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  