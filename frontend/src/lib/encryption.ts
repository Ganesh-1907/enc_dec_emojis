// This is a simple emoji encryption/decryption algorithm
// In a real application, you would want to use a more secure method

// Map of characters to emojis
const charToEmoji: Record<string, string> = {
    a: "😀",
    b: "😃",
    c: "😄",
    d: "😁",
    e: "😆",
    f: "😅",
    g: "😂",
    h: "🤣",
    i: "😊",
    j: "😇",
    k: "🙂",
    l: "🙃",
    m: "😉",
    n: "😌",
    o: "😍",
    p: "🥰",
    q: "😘",
    r: "😗",
    s: "😙",
    t: "😚",
    u: "😋",
    v: "😛",
    w: "😝",
    x: "😜",
    y: "🤪",
    z: "🤨",
    "0": "🧐",
    "1": "🤓",
    "2": "😚",
    u: "😋",
    v: "😛",
    w: "😝",
    x: "😜",
    y: "🤪",
    z: "🤨",
    "0": "🧐",
    "1": "🤓",
    "2": "😎",
    "3": "🥸",
    "4": "🤩",
    "5": "🥳",
    "6": "😏",
    "7": "😒",
    "8": "😞",
    "9": "😔",
    " ": " ",
    ".": "✨",
    ",": "💫",
    "!": "💥",
    "?": "❓",
    "@": "📧",
    "#": "🔢",
    $: "💰",
    "%": "💯",
    "&": "🔄",
    "*": "⭐",
    "(": "⬅️",
    ")": "➡️",
    "-": "➖",
    _: "⬇️",
    "+": "➕",
    "=": "🟰",
    "/": "➗",
    "\\": "↩️",
    ":": "🔺",
    ";": "🔻",
    '"': "💬",
    "'": "💭",
    "<": "⏪",
    ">": "⏩",
    "[": "🔲",
    "]": "🔳",
    "{": "🔷",
    "}": "🔶",
    "|": "🔌",
    "`": "🔍",
    "~": "🔎",
  }
  
  // Create reverse mapping for decryption
  const emojiToChar: Record<string, string> = {}
  for (const [char, emoji] of Object.entries(charToEmoji)) {
    emojiToChar[emoji] = char
  }
  
  export function encryptText(text: string): string {
    let encrypted = ""
  
    // Convert to lowercase for consistency
    text = text.toLowerCase()
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      encrypted += charToEmoji[char] || char
    }
  
    return encrypted
  }
  
  export function decryptText(text: string): string {
    let decrypted = ""
  
    // We need to process emojis which are surrogate pairs in JavaScript
    // This is a simplified approach - a real implementation would need more robust emoji handling
    for (let i = 0; i < text.length; ) {
      // Check if this is an emoji (surrogate pair)
      const char = text.substring(i, i + 2)
  
      if (emojiToChar[char]) {
        decrypted += emojiToChar[char]
        i += 2 // Skip the surrogate pair
      } else {
        // If not an emoji from our map, keep the original character
        decrypted += text[i]
        i += 1
      }
    }
  
    return decrypted
  }
  
  