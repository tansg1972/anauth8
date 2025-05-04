
import { Nav, NavLink } from "./_lib/navigations";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Nav>
            <NavLink href={"/"} >
                 home
            </NavLink>
            <NavLink href={"/loginpage"} >
                 login
            </NavLink>
            <NavLink href={"/newuser"}>
                new user
            </NavLink>
        </Nav>
        {children}
      </body>
    </html>
  );
}
