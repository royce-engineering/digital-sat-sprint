export const dynamic = 'force-dynamic';

import type { ReactNode } from 'react';

export default function AdaptiveLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
