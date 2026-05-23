"use client";

import { useRouter } from "next/navigation";

export default function AdminOpenHouseActions({ id, cancelled }: { id: string; cancelled: boolean }) {
  const router = useRouter();

  const toggleCancel = async () => {
    await fetch(`/api/open-houses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cancelled: !cancelled }),
    });
    router.refresh();
  };

  return (
    <button onClick={toggleCancel} className={`text-xs font-semibold font-inter ${cancelled ? "text-green-600 hover:text-green-700" : "text-red-500 hover:text-red-700"}`}>
      {cancelled ? "Reinstate" : "Cancel"}
    </button>
  );
}
