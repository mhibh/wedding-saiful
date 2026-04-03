'use client';

/**
 * AdminPageClient.tsx
 *
 * Google Sheets CSV Integration for Admin Panel
 * ─────────────────────────────────────────────
 * Setup:
 * 1. Create a Google Sheet with 2 columns: nama | no_wa
 *    Example: Bapak Sanusi | 6281234567890
 *    Row 1 must be headers: nama | no_wa
 * 2. File → Share → Publish to web → Choose sheet → CSV format → Publish
 * 3. Copy the published CSV URL
 * 4. Paste into NEXT_PUBLIC_SHEETS_CSV_URL in your .env.local
 *
 * Note: slug is auto-generated from nama — no manual slug column needed.
 */

import { useState, useMemo, useCallback, useEffect } from 'react';
import { generateSlug, type Guest } from '@/lib/guests';

const CSV_URL = process.env.NEXT_PUBLIC_SHEETS_CSV_URL || '';

function buildWAMessage(guest: Guest, baseUrl: string): string {
  const inviteUrl = `${baseUrl}/${generateSlug(guest.nama)}`;
  return encodeURIComponent(
    `Assalamualaikum ${guest.nama},\n\nKami mengundang Bapak/Ibu/Saudara/i untuk hadir pada tasyakuran pernikahan kami.\n\nBerikut link undangan digital Anda:\n${inviteUrl}\n\nJazakallahu Khairan 🤍`
  );
}

interface Props {
  initialGuests: Guest[];
}

export default function AdminPageClient({ initialGuests }: Props) {
  const [guests, setGuests] = useState<Guest[]>(initialGuests);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [baseUrl, setBaseUrl] = useState('');

  // Client-side refresh
  const refresh = useCallback(async () => {
    if (!CSV_URL) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/guests?t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        setGuests(data);
        setLastUpdated(new Date());
      }
    } catch {
      // Silently fail — use server-rendered data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setLastUpdated(new Date());
    setBaseUrl(window.location.origin);
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return guests;
    const q = search.toLowerCase();
    return guests.filter(
      (g) => g.nama.toLowerCase().includes(q) || generateSlug(g.nama).includes(q)
    );
  }, [guests, search]);

  return (
    <div
      className="min-h-screen bg-paper"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-10 border-b"
        style={{
          background: 'rgba(250, 250, 248, 0.9)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(201, 168, 76, 0.2)',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: '#C9A84C' }}
            >
              Dashboard · Walimatul Ursy
            </p>
            <h1
              className="font-heading text-2xl sm:text-3xl mt-0.5"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1A1A1A' }}
            >
              Daftar Tamu Undangan
            </h1>
          </div>
          <button
            onClick={refresh}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              border: '1px solid rgba(201, 168, 76, 0.4)',
              color: '#C9A84C',
              background: 'rgba(201, 168, 76, 0.06)',
            }}
          >
            <svg
              className={loading ? 'animate-spin' : ''}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M23 4v6h-6M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            {loading ? 'Memuat...' : 'Perbarui'}
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Stats + Search bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div
              className="px-4 py-2 rounded-xl text-sm"
              style={{
                background: 'rgba(201, 168, 76, 0.08)',
                border: '1px solid rgba(201, 168, 76, 0.2)',
              }}
            >
              <span style={{ color: '#9B9B9B' }}>Total Tamu: </span>
              <span className="font-semibold" style={{ color: '#C9A84C' }}>
                {guests.length}
              </span>
            </div>
            {search && (
              <div
                className="px-3 py-2 rounded-xl text-sm"
                style={{
                  background: 'rgba(201, 168, 76, 0.05)',
                  border: '1px solid rgba(201, 168, 76, 0.15)',
                  color: '#9B9B9B',
                }}
              >
                {filtered.length} dari {guests.length} ditemukan
              </div>
            )}
          </div>

          {lastUpdated && (
            <p className="text-xs" style={{ color: '#9B9B9B' }}>
              Terakhir diperbarui:{' '}
              {lastUpdated.toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
               })}
            </p>
          )}
        </div>

        {/* Search input */}
        <div className="relative mb-4">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
            style={{ color: '#C9A84C' }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Cari nama tamu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(201, 168, 76, 0.25)',
              color: '#1A1A1A',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs"
              style={{ color: '#9B9B9B' }}
            >
              ✕
            </button>
          )}
        </div>

        {/* No CSV configured warning */}
        {!CSV_URL && (
          <div
            className="mb-6 p-4 rounded-xl text-sm"
            style={{
              background: 'rgba(201, 168, 76, 0.06)',
              border: '1px solid rgba(201, 168, 76, 0.2)',
              color: '#6B6B6B',
            }}
          >
            <strong style={{ color: '#C9A84C' }}>⚠️ Konfigurasi diperlukan:</strong>{' '}
            Tambahkan <code className="text-xs bg-black/5 px-1 rounded">NEXT_PUBLIC_SHEETS_CSV_URL</code> di file{' '}
            <code className="text-xs bg-black/5 px-1 rounded">.env.local</code> Anda.
          </div>
        )}

        {/* Table */}
        {filtered.length === 0 ? (
          <EmptyState hasSearch={!!search} />
        ) : (
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(201, 168, 76, 0.2)' }}
          >
            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="admin-table w-full" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th className="text-left w-12">No</th>
                    <th className="text-left">Nama</th>
                    <th className="text-left">Slug / Link</th>
                    <th className="text-left">No. WhatsApp</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((guest, idx) => (
                    <GuestRow
                      key={guest.slug}
                      guest={guest}
                      index={idx}
                      baseUrl={baseUrl}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden divide-y" style={{ borderColor: 'rgba(201, 168, 76, 0.1)' }}>
              {filtered.map((guest, idx) => (
                <GuestCard key={guest.slug} guest={guest} index={idx} baseUrl={baseUrl} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GuestRow({ guest, index, baseUrl }: { guest: Guest; index: number; baseUrl: string }) {
  const slug = generateSlug(guest.nama);
  const inviteUrl = `${baseUrl}/${slug}`;
  const waNumber = guest.no_wa.replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNumber}?text=${buildWAMessage(guest, baseUrl)}`;

  return (
    <tr style={{ background: index % 2 === 0 ? 'white' : 'rgba(250,250,248,0.5)' }}>
      <td className="font-body text-center" style={{ color: '#9B9B9B' }}>
        {index + 1}
      </td>
      <td>
        <span className="font-medium" style={{ color: '#1A1A1A' }}>
          {guest.nama}
        </span>
      </td>
      <td>
        <a
          href={inviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs hover:underline"
          style={{ color: '#C9A84C' }}
        >
          /{slug}
        </a>
      </td>
      <td>
        <span style={{ color: '#6B6B6B' }}>{guest.no_wa || '—'}</span>
      </td>
      <td className="text-center">
        <SendWAButton href={waUrl} hasNumber={!!waNumber} />
      </td>
    </tr>
  );
}

function GuestCard({ guest, index, baseUrl }: { guest: Guest; index: number; baseUrl: string }) {
  const inviteUrl = `${baseUrl}/${generateSlug(guest.nama)}`;
  const waNumber = guest.no_wa.replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNumber}?text=${buildWAMessage(guest, baseUrl)}`;

  return (
    <div className="p-4 bg-white">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
            >
              #{index + 1}
            </span>
            <span className="font-medium text-sm truncate" style={{ color: '#1A1A1A' }}>
              {guest.nama}
            </span>
          </div>
          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
            style={{ color: '#C9A84C' }}
          >
            {inviteUrl}
          </a>
          {guest.no_wa && (
            <p className="text-xs mt-1" style={{ color: '#9B9B9B' }}>
              📱 {guest.no_wa}
            </p>
          )}
        </div>
        <SendWAButton href={waUrl} hasNumber={!!waNumber} />
      </div>
    </div>
  );
}

function SendWAButton({ href, hasNumber }: { href: string; hasNumber: boolean }) {
  if (!hasNumber) {
    return (
      <span className="text-xs px-3 py-1.5 rounded-lg" style={{ color: '#9B9B9B', background: 'rgba(0,0,0,0.04)' }}>
        No. WA kosong
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 whitespace-nowrap"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        color: 'white',
      }}
    >
      📤 Kirim WA
    </a>
  );
}

function EmptyState({ hasSearch }: { hasSearch: boolean }) {
  return (
    <div
      className="rounded-2xl p-12 text-center"
      style={{ border: '1px solid rgba(201, 168, 76, 0.15)' }}
    >
      <p className="text-4xl mb-4">{hasSearch ? '🔍' : '📋'}</p>
      <p className="font-heading text-xl mb-2" style={{ color: '#1A1A1A' }}>
        {hasSearch ? 'Tamu tidak ditemukan' : 'Belum ada tamu'}
      </p>
      <p className="text-sm" style={{ color: '#9B9B9B' }}>
        {hasSearch
          ? 'Coba kata kunci yang berbeda.'
          : 'Tambahkan data tamu di Google Sheets Anda, lalu perbarui halaman ini.'}
      </p>
    </div>
  );
}
