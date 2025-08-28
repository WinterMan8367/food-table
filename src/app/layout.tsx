import type { Metadata } from 'next';
import localFont from 'next/font/local';
import clsx from 'clsx';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const font = localFont({
  adjustFontFallback: 'Arial',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Food table',
  description: 'Simple food table',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={clsx(font.className, 'antialiased')}>
        <ThemeProvider attribute='class' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
