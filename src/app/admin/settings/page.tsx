"use client";

import { useState } from "react";
import { Save, Loader2, CheckCircle } from "lucide-react";

export default function AdminSettingsPage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pwForm, setPwForm] = useState({ newPassword: "", confirm: "" });
  const [pwError, setPwError] = useState("");
  const [form, setForm] = useState({
    agentPhone: process.env.NEXT_PUBLIC_AGENT_PHONE || "513-307-6449",
    agentEmail: process.env.NEXT_PUBLIC_AGENT_EMAIL || "windsorinfinity@gmail.com",
    ghlWebhookUrl: "",
    gtmId: "",
    idxSrc: "",
    facebookUrl: "",
    instagramUrl: "",
  });

  const saveSettings = async () => {
    setSaving(true);
    await fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000);
  };

  const changePassword = async () => {
    setPwError("");
    if (pwForm.newPassword !== pwForm.confirm) { setPwError("Passwords don't match."); return; }
    if (pwForm.newPassword.length < 8) { setPwError("Password must be at least 8 characters."); return; }
    const res = await fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ newPassword: pwForm.newPassword }) });
    const data = await res.json();
    if (data.success) { setPwForm({ newPassword: "", confirm: "" }); alert("Password updated. Restart the server to apply."); }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="font-playfair text-3xl font-bold text-navy mb-8">Site Settings</h1>

      <div className="space-y-6">
        <div className="admin-card">
          <h2 className="font-playfair font-bold text-navy text-lg mb-5">Contact Info</h2>
          <div className="space-y-4">
            <div><label className="form-label">Agent Phone</label><input className="form-input" value={form.agentPhone} onChange={e => setForm(f => ({ ...f, agentPhone: e.target.value }))} /></div>
            <div><label className="form-label">Agent Email</label><input className="form-input" type="email" value={form.agentEmail} onChange={e => setForm(f => ({ ...f, agentEmail: e.target.value }))} /></div>
          </div>
        </div>

        <div className="admin-card">
          <h2 className="font-playfair font-bold text-navy text-lg mb-5">Integrations</h2>
          <div className="space-y-4">
            <div><label className="form-label">GHL Webhook URL</label><input className="form-input" value={form.ghlWebhookUrl} onChange={e => setForm(f => ({ ...f, ghlWebhookUrl: e.target.value }))} placeholder="https://hooks.leadconnectorhq.com/..." /></div>
            <div><label className="form-label">Google Tag Manager ID</label><input className="form-input" value={form.gtmId} onChange={e => setForm(f => ({ ...f, gtmId: e.target.value }))} placeholder="GTM-XXXXXXX" /></div>
            <div><label className="form-label">IDX Embed URL</label><input className="form-input" value={form.idxSrc} onChange={e => setForm(f => ({ ...f, idxSrc: e.target.value }))} placeholder="https://your-idx-provider.com/..." /></div>
          </div>
        </div>

        <div className="admin-card">
          <h2 className="font-playfair font-bold text-navy text-lg mb-5">Social Media</h2>
          <div className="space-y-4">
            <div><label className="form-label">Facebook URL</label><input className="form-input" value={form.facebookUrl} onChange={e => setForm(f => ({ ...f, facebookUrl: e.target.value }))} placeholder="https://facebook.com/..." /></div>
            <div><label className="form-label">Instagram URL</label><input className="form-input" value={form.instagramUrl} onChange={e => setForm(f => ({ ...f, instagramUrl: e.target.value }))} placeholder="https://instagram.com/..." /></div>
          </div>
        </div>

        <button onClick={saveSettings} disabled={saving} className="btn-navy flex items-center gap-2">
          {saving ? <><Loader2 className="w-4 h-4 animate-spin" />Saving...</> : saved ? <><CheckCircle className="w-4 h-4 text-green-400" />Saved!</> : <><Save className="w-4 h-4" />Save Settings</>}
        </button>

        <div className="admin-card border-t-4 border-red-400">
          <h2 className="font-playfair font-bold text-navy text-lg mb-5">Change Password</h2>
          {pwError && <p className="text-red-500 text-sm mb-3 font-inter">{pwError}</p>}
          <div className="space-y-4 mb-4">
            <div><label className="form-label">New Password</label><input className="form-input" type="password" value={pwForm.newPassword} onChange={e => setPwForm(f => ({ ...f, newPassword: e.target.value }))} /></div>
            <div><label className="form-label">Confirm Password</label><input className="form-input" type="password" value={pwForm.confirm} onChange={e => setPwForm(f => ({ ...f, confirm: e.target.value }))} /></div>
          </div>
          <button onClick={changePassword} className="btn-outline-gold text-sm py-2.5 px-6">Update Password</button>
          <p className="text-gray-400 text-xs font-inter mt-2">After changing, update ADMIN_PASSWORD in your .env file with the new hash and restart the server.</p>
        </div>
      </div>
    </div>
  );
}
