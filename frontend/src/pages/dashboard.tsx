"use client"

import { useState } from "react"
import Link from "next/link"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EncryptForm from "@/components/ui/encrypt-form"
import DecryptForm from "@/components/ui/decrypt-form"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("encrypt")

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Emoji
              </span>
              <span>Crypto</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto py-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Emoji Encryption & Decryption
              </h1>
              <p className="text-muted-foreground">Convert your text to emojis and back again</p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 border border-purple-100 dark:border-purple-900">
              <Tabs defaultValue="encrypt" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 p-1 bg-purple-100 dark:bg-purple-900/50 rounded-lg mb-6">
                  <TabsTrigger
                    value="encrypt"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    Encrypt
                  </TabsTrigger>
                  <TabsTrigger
                    value="decrypt"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md transition-all duration-200"
                  >
                    Decrypt
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="encrypt" className="animate-in fade-in-50 slide-in-from-bottom-5 duration-300">
                  <EncryptForm />
                </TabsContent>
                <TabsContent value="decrypt" className="animate-in fade-in-50 slide-in-from-bottom-5 duration-300">
                  <DecryptForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
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

