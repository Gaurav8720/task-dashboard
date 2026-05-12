import { addTask } from "@/actions/taskActions";

export default function TaskForm() {
  return (
    <form action={addTask} className="flex gap-2 mb-6">
      <input
        type="text"
        name="title"
        placeholder="Add a new task..."
        className="flex-1 border rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}