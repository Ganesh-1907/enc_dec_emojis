"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Upload, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { encryptText } from "@/lib/encryption"

export default function EncryptForm() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [fileName, setFileName] = useState("")
  const [fileContent, setFileContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [inputMethod, setInputMethod] = useState("text")

  const handleEncrypt = () => {
    setIsLoading(true)

    // Use the text from the appropriate input source
    const textToEncrypt = inputMethod === "text" ? inputText : fileContent

    // Simulate encryption process
    setTimeout(() => {
      const encrypted = encryptText(textToEncrypt)
      setOutputText(encrypted)
      setIsLoading(false)
    }, 1000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)

    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      setFileContent(content)
    }
    reader.readAsText(file)
  }

  const handleDownload = () => {
    if (!outputText) return

    const element = document.createElement("a")
    const file = new Blob([outputText], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `encrypted_${fileName || "text"}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-300">
      <Tabs defaultValue="text" value={inputMethod} onValueChange={setInputMethod} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Text Input
          </TabsTrigger>
          <TabsTrigger value="file" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            File Upload
          </TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="space-y-4 pt-4">
          <div className="grid gap-2">
            <Label htmlFor="input-text">Enter text to encrypt</Label>
            <Textarea
              id="input-text"
              placeholder="Type or paste your text here..."
              className="min-h-[150px]"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <Button onClick={handleEncrypt} disabled={isLoading || !inputText} className="w-full">
            {isLoading ? "Encrypting..." : "Encrypt to Emojis"}
          </Button>
        </TabsContent>

        <TabsContent value="file" className="space-y-4 pt-4">
          <div className="grid gap-2">
            <Label htmlFor="file-upload">Upload a text file</Label>
            <Input id="file-upload" type="file" accept=".txt" onChange={handleFileChange} />
            {fileName && <p className="text-sm text-muted-foreground">Selected file: {fileName}</p>}
          </div>

          <Button onClick={handleEncrypt} disabled={isLoading || !fileContent} className="w-full">
            {isLoading ? "Encrypting..." : "Encrypt File to Emojis"}
          </Button>
        </TabsContent>
      </Tabs>

      {outputText && (
        <Card className="mt-6 animate-in fade-in-50 slide-in-from-bottom-5 duration-300">
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="output-text">Encrypted Result (Emojis)</Label>
                <Button variant="outline" size="sm" onClick={handleDownload} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
              <Textarea id="output-text" className="min-h-[150px] font-emoji" value={outputText} readOnly />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

