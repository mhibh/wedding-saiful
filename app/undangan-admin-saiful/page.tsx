import type { Metadata } from 'next';
import AdminPageClient from './AdminPageClient';
import { fetchAllGuests } from '@/lib/guests';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Admin — Daftar Tamu Undangan | Saiful & Aulia',
  description: 'Kelola daftar tamu undangan pernikahan Saiful & Aulia.',
};

export default async function AdminPage() {
  const guests = await fetchAllGuests();
  return <AdminPageClient initialGuests={guests} />;
}
