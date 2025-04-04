
# 🎬 frontend-movie-app

A simple and elegant frontend web application that allows users to browse and search for movies using [The Movie Database (TMDb)](https://www.themoviedb.org/) API. This project displays trending/popular movies and lets users search by title, displaying movie posters and titles in a clean layout.

---

## 🚀 Features

- 🔍 Search functionality to find movies by title  
- 📈 Display of trending/popular movies on load  
- 🖼️ Movie posters with titles displayed in a grid  
- 🎨 Responsive and modern UI built with CSS  
- ⚡ Fast loading with real-time data from TMDb  

---

## 🧰 Tech Stack

- **HTML5** – for page structure  
- **CSS3** – for layout and styling  
- **JavaScript** – for API calls and dynamic content  
- **TMDb API** – for fetching movie data  

---

## 📁 Folder Structure

```
frontend-movie-app/
│
├── index.html       # Main HTML page
├── style.css        # Stylesheet
├── script.js        # JavaScript logic
└── README.md        # Project documentation
```

---

## 📦 Clone the Repository

```bash
git clone https://github.com/sekanderdany/frontend-movie-app.git
cd frontend-movie-app
```

---

## ▶️ Run the App

You can run this app locally in two ways:

### Method 1: Open directly

Just double-click the `index.html` file in your file explorer to open it in your browser.

### Method 2: Use Live Server (Recommended)

If you’re using Visual Studio Code:

1. Install the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Open the project folder in VS Code
3. Right-click on `index.html` and click **"Open with Live Server"**

---

## 🔐 TMDb API Key

This app uses TMDb to fetch movie data. It includes a temporary demo key, but for best results:

1. Sign up at [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Navigate to [API Settings](https://www.themoviedb.org/settings/api)
3. Get your **API key (v3 auth)**

Then replace the demo key in `script.js`:

```js
const APILINK = "https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=";
```

---

## 📸 Screenshots

_You can add screenshots of your UI below for a visual preview._

```
Coming soon!
```

---

## 🙋‍♂️ Contact

Made with ❤️ by **Sekander Dany**

- GitHub: [@sekanderdany](https://github.com/sekanderdany)
- Repo: [frontend-movie-app](https://github.com/sekanderdany/frontend-movie-app)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this project with attribution.

---
