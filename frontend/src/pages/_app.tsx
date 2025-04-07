import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Toaster } from "sonner" // ✅ import sonner Toaster

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster richColors position="top-center" /> {/* ✅ renders the toast container */}
    </>
  )
}
