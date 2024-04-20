import * as React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
