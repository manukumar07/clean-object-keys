# clean-object-keys

🧹 A tiny JavaScript utility to remove `null`, `undefined`, and `""` (empty string) values from an object.

![NPM Version](https://img.shields.io/npm/v/clean-object-keys.svg)
![Downloads](https://img.shields.io/npm/dt/clean-object-keys.svg)
![License](https://img.shields.io/npm/l/clean-object-keys.svg)

## 📦 Installation

```bash
npm install clean-object-keys
```

### ✅ 3. Why Use This?

```markdown
✅ Clean API request payloads  
✅ Sanitize form data or configs  
✅ Remove empty/invalid values easily  
✅ Supports nested objects  
✅ 100% lightweight (no dependencies)
```

### ➤ Basic Example

```
const { cleanObject } = require("clean-object-keys");

const data = {
  name: "Manu",
  email: "",
  phone: undefined,
  age: null,
  country: "India",
};

const cleaned = cleanObject(data);

console.log(cleaned);
// Output: { name: 'Manu', country: 'India' }

```

## 📁 Folder Structure

```
clean-object-keys/
├── src/
│ └── index.js # Core function
├── test/
│ └── index.test.js # Test file
├── package.json
├── README.md
└── .gitignore
```

> ⚡ Made by Manu Kumar Pal — feel free to contribute, star ⭐, or share!
