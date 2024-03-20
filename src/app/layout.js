import Menu from "./componente/menu"
import Footer from "./componente/rodape"
import Localizacao from "./registro/localizacao"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
          <Menu/>
          <Localizacao/>
          {children}
          <Footer/>
        </body>
    </html>
  )
}
