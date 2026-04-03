/**
 * lib/guests.ts
 *
 * Google Sheets CSV Integration
 * ─────────────────────────────
 * Setup:
 * 1. Create a Google Sheet with 2 columns: nama | no_wa
 *    Example row:  Bapak Sanusi | 6281234567890
 *    Row 1 must be headers: nama | no_wa
 * 2. File → Share → Publish to web → Select sheet → CSV format → Publish
 * 3. Copy the published CSV URL
 * 4. Paste it into NEXT_PUBLIC_SHEETS_CSV_URL in your .env.local
 *
 * Note: slug is auto-generated from nama using generateSlug()
 */

export type Guest = {
  slug: string; // auto-generated from nama
  nama: string;
  no_wa: string;
};

/**
 * Generate a URL-safe slug from a guest's nama.
 * Example: "Bapak Sanusi" → "bapak-sanusi"
 */
export function generateSlug(nama: string): string {
  return nama
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

/**
 * Parse a raw CSV string into an array of Guest objects.
 * Expects the first row to be a header: nama,no_wa
 * Slug is auto-generated from nama — no slug column needed.
 */
function parseCSV(raw: string): Guest[] {
  const lines = raw.trim().split('\n');
  if (lines.length < 2) return [];

  // Skip header row
  return lines
    .slice(1)
    .map((line) => {
      // Handle quoted fields with commas inside them
      const parts: string[] = [];
      let current = '';
      let inQuotes = false;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          parts.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      parts.push(current.trim());

      const nama = parts[0] || '';
      return {
        slug: generateSlug(nama),
        nama,
        no_wa: parts[1] || '',
      };
    })
    .filter((g) => g.nama);
}

const CSV_URL = process.env.NEXT_PUBLIC_SHEETS_CSV_URL || '';

/**
 * Fetch all guests – used by the admin page (always fresh).
 */
export async function fetchAllGuests(): Promise<Guest[]> {
  const csvUrl = process.env.NEXT_PUBLIC_SHEETS_CSV_URL;
  
  if (!csvUrl) {
    console.warn('[guests] NEXT_PUBLIC_SHEETS_CSV_URL is not set');
    return [];
  }

  try {
    const response = await fetch(csvUrl, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    return parseCSV(text);
  } catch (error) {
    console.error('[guests] fetchAllGuests error:', error);
    return [];
  }
}

/**
 * Fetch a single guest by slug – used by invitation pages (cached 1 hour).
 * Slug is matched against generateSlug(guest.nama).
 * Returns null if not found (caller should show fallback name).
 */
export async function fetchGuestBySlug(slug: string): Promise<Guest | null> {
  if (!CSV_URL) return null;
  try {
    const res = await fetch(CSV_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch guest list');
    const text = await res.text();
    const guests = parseCSV(text);
    const target = slug.toLowerCase().trim();
    return guests.find((g) => g.slug === target) ?? null;
  } catch (err) {
    console.error('[guests] fetchGuestBySlug error:', err);
    return null;
  }
}
