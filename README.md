<p align="center">
  <img width="160" src="./assets/logo.png" />
  <p align="center"> 
    <h2 align="center">Stake Vlad Dracula</h2>
  </p>
  <p align="center">StakeVladDracula pierces all ! </p>
  <p align="center">🎯 Pure AI API Proxy Service - No UI, Just Performance</p>
</h2>

## ⚡ Latest Updates
- **v2.3**: Optimized clean prefixes (e.g., `/openai`, `/openrouter`) for easier integration
- **v2.2**: Implemented Prefix-Based Routing to eliminate endpoint conflicts

### 🎯 Supported Endpoints (Recommended)
| AI Provider | Proxy Base Path | Target API Base |
|------------|-----------------|-----------------|
| **OpenAI** | `/openai` | `https://api.openai.com/v1` |
| **Claude** | `/anthropic` | `https://api.anthropic.com/v1` |
| **Gemini** | `/gemini` | `https://generativelanguage.googleapis.com/v1beta` |
| **Groq** | `/groq` | `https://api.groq.com/openai/v1` |
| **OpenRouter** | `/openrouter` | `https://openrouter.ai/api/v1` |

---

## 🚀 How to use

Just use the **Proxy Base Path** in place of the provider's original API base URL.

### OpenAI
```javascript
const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://stake-vlad-dracula.vercel.app/openai',
});
```

### OpenRouter
```javascript
const openai = new OpenAI({
  apiKey: 'YOUR_OPENROUTER_KEY',
  baseURL: 'https://stake-vlad-dracula.vercel.app/openrouter',
});
```

### Claude (Anthropic)
```javascript
// Use the base URL: 'https://stake-vlad-dracula.vercel.app/anthropic'
```

### Gemini
```javascript
// Use the base URL: 'https://stake-vlad-dracula.vercel.app/gemini'
```

### Groq
```javascript
// Use the base URL: 'https://stake-vlad-dracula.vercel.app/groq'
```

## ✨ Identification
All requests include the `StakeVladDracula-Router: v2.0` header.
