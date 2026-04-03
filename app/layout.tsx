import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Undangan Pernikahan | Saiful & Aulia',
  description:
    'Bismillah. Kami mengundang Anda untuk hadir pada tasyakuran pernikahan Kyai Muh. Saiful Anwar & Aulia Priyangka, Kamis 09 April 2026 di Pondok Pesantren Al-Qomar, Mempawah.',
  openGraph: {
    title: 'Undangan Pernikahan | Saiful & Aulia',
    description:
      'Kami mengundang Anda pada tasyakuran pernikahan kami, 09 April 2026.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-paper">{children}</body>
    </html>
  );
}
