import Link from "next/link"
import { ArrowRight, Lock, Unlock, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Emoji</span>
            <span>Crypto</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/signin">
              <Button
                variant="ghost"
                className="hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 animate-in fade-in-50 duration-300">
              <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Encrypt and Decrypt Text
                </span>
                <br />
                <span>Using Emojis</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Transform your plain text into fun emoji messages and back again. Secure your communications with a
                touch of fun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-200 gap-2"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-300">
                <div className="inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-3">
                  <Lock className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Encryption
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Convert your plain text into a series of emojis that only you and your recipients can understand. Our
                  algorithm ensures that each character is uniquely represented by an emoji, making your messages both
                  secure and fun to look at.
                </p>
                <div className="bg-purple-100/50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800 font-emoji text-lg">
                  Hello World → 😀😌😆😆😍 😝😍😗😆😚
                </div>
              </div>
              <div className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-300 delay-150">
                <div className="inline-block rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-3">
                  <Unlock className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Decryption
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Received an emoji message? Simply paste it into our decryption tool and get back the original text.
                  Our system works both ways, allowing for seamless communication while maintaining privacy.
                </p>
                <div className="bg-indigo-100/50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                  <div className="font-emoji text-lg mb-2">😀😌😆😆😍 😝😍😗😆😚</div>
                  <div className="text-lg">→ Hello World</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-indigo-100/50 dark:from-purple-900/20 dark:to-indigo-900/20 -z-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center gap-4 animate-in fade-in-50 duration-300">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Ready to Try It Out?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Sign up now to start encrypting and decrypting your messages with emojis. It's free and easy to use!
              </p>
              <Link href="/signup" className="mt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EmojiCrypto. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

