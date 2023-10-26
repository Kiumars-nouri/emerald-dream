import "@style.css"
import Provider from "@components/Provider.jsx"
import Nav from "@components/Nav.jsx"
import Footer from "@components/Footer.jsx"
import Cartrovider from "@components/CartContext"




const RootLayout = ({children}) => {
  return (
    <html lang="en-gb">
      <head>
        <title>Green Emerald</title>
        <link rel="icon" type="image/png" href="./logo.png" sizes="32x32"/>
        <link rel="stylesheet" 
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800&display=swap" />
      </head>
      <Cartrovider>
        <body className="background">
        <Provider>
        <Nav />
            <main className="mt-[140px] md:min-h-[70vh]">
              {children}
            </main>
          <Footer />
        </Provider>
        </body>
      </Cartrovider>
    </html>
  )
}

export default RootLayout;