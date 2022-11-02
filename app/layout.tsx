import "./globals.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Bossman's Juicy News</title>
        <meta
          name='description'
          content="Bossman's juicy news from Boss Store, Fenwicks, Newcastle"
        />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  );
}
