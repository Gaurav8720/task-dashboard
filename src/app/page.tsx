import prisma from "@/lib/prisma";
//navbar compnent import
import Navbar from "@/components/Navbar";
// task from component import
import TaskForm from "@/app/components/TaskForm";
//single task card component import
import TaskCard from "@/app/components/TaskCard";

// home page
export default async function Home() {
  const tasks = await prisma.task.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-10">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Task</h2>
              <TaskForm />
              <p className="text-sm text-gray-500 mt-4 italic">
                Tip: Keep your titles short and actionable.
              </p>
            </div>
          </div>

          {/* Right Column: Task List Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Active Dashboard</h2>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-bold">
                Total: {tasks.length}
              </span>
            </div>

            {/* Tasks Mapping using our new TaskCard */}
            <div className="grid grid-cols-1 gap-2">
              {tasks.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-400">No tasks found. Start by adding one!</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <TaskCard 
                    key={task.id}
                    id={task.id}
                    title={task.title}
                  />
                ))
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
