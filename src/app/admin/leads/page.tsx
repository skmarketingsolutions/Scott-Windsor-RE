"use client";

import { useState, useEffect } from "react";
import { formatDate } from "@/lib/utils";
import { Download, Copy, Check } from "lucide-react";

interface Lead {
  id: string; firstName: string; lastName?: string; email: string;
  phone?: string; message?: string; formType: string; sourcePage: string;
  status: string; createdAt: string;
}

const statusColors: Record<string, string> = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-yellow-100 text-yellow-700",
  Qualified: "bg-green-100 text-green-700",
  Archived: "bg-gray-100 text-gray-500",
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/leads").then(r => r.json()).then(d => { setLeads(d.leads || []); setLoading(false); });
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/leads/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const exportCSV = () => {
    const rows = [["Name", "Email", "Phone", "Form Type", "Source", "Status", "Date", "Message"]];
    leads.forEach(l => rows.push([`${l.firstName} ${l.lastName || ""}`, l.email, l.phone || "", l.formType, l.sourcePage, l.status, formatDate(l.createdAt), l.message || ""]));
    const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "leads.csv"; a.click();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-navy">Leads</h1>
          <p className="text-gray-500 text-sm font-inter mt-1">{leads.length} total submissions</p>
        </div>
        <button onClick={exportCSV} className="btn-outline-gold flex items-center gap-2 text-sm py-2.5 px-5">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="admin-card p-0 overflow-hidden">
        {loading ? (
          <div className="text-center py-16 text-gray-400 font-inter">Loading leads...</div>
        ) : leads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Form Type</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="font-semibold text-navy">{lead.firstName} {lead.lastName}</td>
                    <td>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-inter">{lead.email}</span>
                          <button onClick={() => copyToClipboard(lead.email, `email-${lead.id}`)} className="text-gray-300 hover:text-gold">
                            {copied === `email-${lead.id}` ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                          </button>
                        </div>
                        {lead.phone && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-gray-500 font-inter">{lead.phone}</span>
                            <button onClick={() => copyToClipboard(lead.phone!, `phone-${lead.id}`)} className="text-gray-300 hover:text-gold">
                              {copied === `phone-${lead.id}` ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                    <td><span className="text-xs bg-navy/10 text-navy px-2 py-1 font-inter">{lead.formType}</span></td>
                    <td className="text-gray-400 text-xs font-mono">{lead.sourcePage}</td>
                    <td>
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-xs font-bold px-2 py-1 border-0 cursor-pointer font-inter ${statusColors[lead.status] || "bg-gray-100"}`}
                      >
                        {["New", "Contacted", "Qualified", "Archived"].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="text-gray-400 text-xs">{formatDate(lead.createdAt)}</td>
                    <td className="max-w-xs">
                      <p className="text-xs text-gray-500 font-inter truncate">{lead.message || "—"}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 font-inter">No leads yet. They&apos;ll appear here when visitors submit forms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
