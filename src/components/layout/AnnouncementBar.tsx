'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const announcements = [
  'Free shipping on orders over ₹1,999 across India',
  'New: Strawberry Matcha — our most-loved blend',
  'Ceremonial matcha from Uji, Kyoto — arriving fresh',
];

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);

  if (dismissed) return null;

  return (
    <div className="bg-[#292925] text-[#FCFAF6] text-xs tracking-widest uppercase py-2.5 px-4 flex items-center justify-between">
      <div className="flex-1 text-center cursor-pointer select-none" onClick={() => setIndex((i) => (i + 1) % announcements.length)}>
        {announcements[index]}
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="ml-4 opacity-60 hover:opacity-100 transition-opacity"
      >
        <X size={12} />
      </button>
    </div>
  );
}
