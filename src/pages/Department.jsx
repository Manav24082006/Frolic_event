import React from 'react'

function Department() {
  return (
    <>
      <div className="bg-white border-b">
    <div className="px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Departments</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage department members and responsibilities
        </p>
      </div>
      <button className="bg-purple-600 text-white px-5 py-2 rounded-md text-sm hover:bg-purple-700 transition-colors w-full sm:w-auto">
        + Add Department
      </button>
    </div>

    {/* <!-- Cards Grid --> */}
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
        
        
        <div className="bg-white rounded-lg border p-4 sm:p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4">
            <div>
              <h2 className="text-lg font-semibold">Decoration Team</h2>
              <p className="text-sm text-slate-500 mt-1">
                Stage setup, venue decor, and themes
              </p>
            </div>
            <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
              12 Members
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border rounded-md hover:bg-slate-50 transition-colors">
              View Members
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-green-600 text-green-700 rounded-md hover:bg-green-50 transition-colors">
              Add Member
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-red-600 text-red-700 rounded-md hover:bg-red-50 transition-colors">
              Remove Member
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-lg border p-4 sm:p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4">
            <div>
              <h2 className="text-lg font-semibold">Logistics Team</h2>
              <p className="text-sm text-slate-500 mt-1">
                Transport, equipment, and scheduling
              </p>
            </div>
            <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
              8 Members
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border rounded-md hover:bg-slate-50 transition-colors">
              View Members
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-green-600 text-green-700 rounded-md hover:bg-green-50 transition-colors">
              Add Member
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-red-600 text-red-700 rounded-md hover:bg-red-50 transition-colors">
              Remove Member
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-lg border p-4 sm:p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4">
            <div>
              <h2 className="text-lg font-semibold">Marketing Team</h2>
              <p className="text-sm text-slate-500 mt-1">
                Promotion, posters, and social media
              </p>
            </div>
            <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
              10 Members
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border rounded-md hover:bg-slate-50 transition-colors">
              View Members
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-green-600 text-green-700 rounded-md hover:bg-green-50 transition-colors">
              Add Member
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-red-600 text-red-700 rounded-md hover:bg-red-50 transition-colors">
              Remove Member
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-lg border p-4 sm:p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4">
            <div>
              <h2 className="text-lg font-semibold">Finance Team</h2>
              <p className="text-sm text-slate-500 mt-1">
                Budget planning and expense tracking
              </p>
            </div>
            <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">
              5 Members
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border rounded-md hover:bg-slate-50 transition-colors">
              View Members
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-green-600 text-green-700 rounded-md hover:bg-green-50 transition-colors">
              Add Member
            </button>
            <button className="flex-1 sm:flex-none px-3 py-2 text-sm border border-red-600 text-red-700 rounded-md hover:bg-red-50 transition-colors">
              Remove Member
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Department
