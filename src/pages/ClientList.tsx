// src/pages/ClientListPage.tsx
import { useMemo, useState } from "react";
import { useClients } from "../hooks/useClients"; // or swap for your own hook/fetch
import type { Client } from "../types/client";

type SelectedClient = Client | null;

export default function ClientListPage() {
  const { data, isLoading, isError } = useClients();
  const [filter, setFilter] = useState("");
  const [selectedClient, setSelectedClient] = useState<SelectedClient>(null);
  const [deleteTarget, setDeleteTarget] = useState<SelectedClient>(null);

  const filteredClients = useMemo(() => {
    if (!data) return [];
    const f = filter.trim().toLowerCase();
    if (!f) return data;
    return data.filter((c) => {
      const blob = `${c.name} ${c.last} ${c.email ?? ""} ${
        c.phone ?? ""
      }`.toLowerCase();
      return blob.includes(f);
    });
  }, [data, filter]);

  const handleDelete = async (client: Client) => {
    // TODO: wire to your API: DELETE /api/clients/:id
    // await fetch(`/api/clients/${client._id}`, { method: "DELETE" })
    // then refetch via React Query or manually update state
    console.log("Delete client", client._id);
    setDeleteTarget(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Top bar */}
      <header className="bg-brand text-white shadow">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-4">
          <span className="text-sm font-medium">
            Client List for Becker Business Strategies
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Search row */}
        <div className="mb-4 flex items-center gap-3">
          <div className="relative w-full max-w-md">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <span className="material-icons text-base">search</span>
            </span>
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter by name, email, or phone"
              className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-800 shadow-sm outline-none ring-0 transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </div>

        {/* Card container */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Table */}
          <div className="max-h-[70vh] overflow-auto">
            <table className="min-w-full text-left text-sm text-slate-800">
              <thead className="sticky top-0 z-10 bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Last</th>
                  <th className="hidden px-4 py-3 md:table-cell">Email</th>
                  <th className="hidden px-4 py-3 md:table-cell">Phone</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-6 text-center text-sm text-slate-500"
                    >
                      Loading clients…
                    </td>
                  </tr>
                )}

                {isError && !isLoading && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-6 text-center text-sm text-red-500"
                    >
                      Failed to load clients. Please try again.
                    </td>
                  </tr>
                )}

                {!isLoading && !isError && filteredClients.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-6 text-center text-sm text-slate-500"
                    >
                      No matching clients found.
                    </td>
                  </tr>
                )}

                {!isLoading &&
                  !isError &&
                  filteredClients.map((client) => (
                    <tr
                      key={client._id}
                      className="border-t border-slate-100 hover:bg-slate-50"
                    >
                      <td className="px-4 py-3 align-middle text-sm">
                        {client.name}
                      </td>
                      <td className="px-4 py-3 align-middle text-sm">
                        {client.last}
                      </td>
                      <td className="hidden px-4 py-3 align-middle text-sm md:table-cell">
                        {client.email}
                      </td>
                      <td className="hidden px-4 py-3 align-middle text-sm md:table-cell">
                        {client.phone}
                      </td>
                      <td className="px-4 py-3 align-middle">
                        <div className="flex justify-end gap-2">
                          {/* View message */}
                          <button
                            type="button"
                            onClick={() => setSelectedClient(client)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                            title="View message"
                          >
                            <i className="fa fa-envelope text-xs" />
                          </button>
                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => setDeleteTarget(client)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100"
                            title="Delete client"
                          >
                            <i className="fa fa-trash-alt text-xs" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Message dialog */}
      {selectedClient && (
        <MessageDialog
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}

      {/* Confirm delete dialog */}
      {deleteTarget && (
        <ConfirmDeleteDialog
          client={deleteTarget}
          onCancel={() => setDeleteTarget(null)}
          onConfirm={() => handleDelete(deleteTarget)}
        />
      )}
    </div>
  );
}

/* -------- Message Dialog -------- */

type MessageDialogProps = {
  client: Client;
  onClose: () => void;
};

function MessageDialog({ client, onClose }: MessageDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-5 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">
            Message from {client.name} {client.last}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
          >
            <span className="material-icons text-base">close</span>
          </button>
        </div>

        <div className="mb-3 grid grid-cols-1 gap-2 text-xs text-slate-600 sm:grid-cols-2">
          <div>
            <div className="font-semibold text-slate-700">Email</div>
            <div>{client.email}</div>
          </div>
          <div>
            <div className="font-semibold text-slate-700">Phone</div>
            <div>{client.phone}</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-1 text-xs font-semibold text-slate-700">
            Message
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
            {client.message || (
              <span className="text-slate-400">No message provided.</span>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            Close
          </button>
          {client.email && (
            <a
              href={`mailto:${client.email}`}
              className="inline-flex items-center rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand/80"
            >
              Reply via email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------- Confirm Delete Dialog -------- */

type ConfirmDeleteDialogProps = {
  client: Client;
  onCancel: () => void;
  onConfirm: () => void;
};

function ConfirmDeleteDialog({
  client,
  onCancel,
  onConfirm,
}: ConfirmDeleteDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
        <h2 className="text-sm font-semibold text-slate-900">Delete client</h2>
        <p className="mt-2 text-xs text-slate-600">
          Are you sure you want to remove{" "}
          <span className="font-semibold">
            {client.name} {client.last}
          </span>{" "}
          from the client list? This action cannot be undone.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
