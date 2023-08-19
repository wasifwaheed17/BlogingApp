import Dashboard from "@/Components/Dashboard/Dashboard"
import NavBar from "@/Components/Nav/NavBar.js"
import Placeholder from "@/Components/Crtblog/Crtblog"
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Blogs from "@/Components/Blogs/Blogs"


export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    
    <Component {...pageProps} />
    </>
 )
}
