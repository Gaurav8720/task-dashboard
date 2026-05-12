"use client";

// React ka useState edit mode handle karne ke liye
import { useState } from "react";

// Delete aur Update functions import kar rahe hain
import {
  deleteTask,
  updateTask,
} from "@/actions/taskActions";

// Props ka type define kar rahe hain
interface TaskProps {
  id: string;
  title: string;
}

export default function TaskCard({
  id,
  title,
}: TaskProps) {

  // Edit mode ON/OFF karne ke liye
  const [isEditing, setIsEditing] = useState(false);

  // Input field ki value store karne ke liye
  const [newTitle, setNewTitle] = useState(title);

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex-1">

        {/* Agar editing ON hai toh input show karo */}
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) =>
              setNewTitle(e.target.value)
            }
            className="border px-3 py-2 rounded-lg w-full"
          />
        ) : (
          // Normal task title
          <h2 className="text-lg font-semibold">
            {title}
          </h2>
        )}
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex gap-2 ml-4">

        {/* EDIT MODE BUTTONS */}
        {isEditing ? (
          <>
            {/* SAVE BUTTON */}
            <button
              onClick={async () => {

                // Database me updated task save karega
                await updateTask(id, newTitle);

                // Edit mode band
                setIsEditing(false);
              }}
              className="bg-green-500 text-white px-3 py-2 rounded-lg"
            >
              Save
            </button>

            {/* CANCEL BUTTON */}
            <button
              onClick={() => {
                setIsEditing(false);

                // Old title wapas set
                setNewTitle(title);
              }}
              className="bg-gray-300 px-3 py-2 rounded-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            {/* EDIT BUTTON */}
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg"
            >
              Edit
            </button>

            {/* DELETE BUTTON */}
            <button
              onClick={async () => {

                // Delete confirm popup
                const confirmDelete =
                  confirm(
                    "Kya aap task delete karna chahte hain?"
                  );

                if (confirmDelete) {
                  // Task delete
                  await deleteTask(id);
                }
              }}
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
