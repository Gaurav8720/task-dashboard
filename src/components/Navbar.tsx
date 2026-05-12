export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 mb-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            Project-
          </div>
          <span className="text-3xl font-black text-gray-800 tracking-tight">
            Management- <span className="text-blue-600">Dashboard</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          
          <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=GAURAV" alt="user" />
          </div>
        </div>
      </div>
    </nav>
  );
}
