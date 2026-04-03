import { notFound } from 'next/navigation';
import { fetchGuestBySlug } from '@/lib/guests';
import HeroSection from '@/components/sections/HeroSection';
import GuestGreetingSection from '@/components/sections/GuestGreetingSection';
import CoupleSection from '@/components/sections/CoupleSection';
import EventSection from '@/components/sections/EventSection';
import CountdownTimer from '@/components/sections/CountdownTimer';
import ClosingSection from '@/components/sections/ClosingSection';
import MusicToggle from '@/components/ui/MusicToggle';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: { nama: string };
}

export default async function InvitationPage({ params }: PageProps) {
  const slug = decodeURIComponent(params.nama);

  // Fetch guest data — show 404 if not found
  const guest = await fetchGuestBySlug(slug);
  
  if (!guest) {
    notFound();
  }

  const guestName = guest.nama;

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <GuestGreetingSection guestName={guestName} />
      <CoupleSection />
      <EventSection />
      <CountdownTimer />
      <ClosingSection />
      <MusicToggle />
    </main>
  );
}

// Generate metadata per guest
export async function generateMetadata({ params }: PageProps) {
  const slug = decodeURIComponent(params.nama);
  const guest = await fetchGuestBySlug(slug);

  if (!guest) {
    return {
      title: 'Halaman Tidak Ditemukan | Saiful & Aulia',
      description: 'Halaman undangan yang Anda cari tidak tersedia.'
    };
  }

  const guestName = guest.nama;

  return {
    title: `Undangan untuk ${guestName} | Saiful & Aulia`,
    description: `Dengan penuh kebahagiaan, kami mengundang ${guestName} untuk hadir pada walimatul ursy Saiful & Aulia, 09 April 2026, Pondok Pesantren Al-Qomar, Mempawah.`,
  };
}
