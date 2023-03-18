import React, {useState, useEffect} from 'react'

export default function Settings() {
    const [settings, setSettings] = useState(true)
    const toggleSettings = () => {
        document.documentElement.setAttribute("data-theme", (localStorage.getItem("theme") || "light"))
        document.documentElement.setAttribute("data-font", (localStorage.getItem("font") || "sans-serif")) 
        setSettings(!settings)
        if (settings) {
            document.getElementById("settings-container").style.display = "none"
        }
        else {
            document.getElementById("settings-container").style.display = "block"
        }
    }
    const toggleTheme = (theme) => {
        if (theme === "system") {
            theme = "light"
        }
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }
    const toggleFont = (font) => {
        document.documentElement.setAttribute("data-font", font)
        localStorage.setItem("font", font)
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", (localStorage.getItem("theme") || "light"))
        document.documentElement.setAttribute("data-font", (localStorage.getItem("font") || "sans-serif")) 
        if (settings) {
            document.getElementById("settings-container").style.display = "none"
        }
        else {
            document.getElementById("settings-container").style.display = "block"
        }
    }, [settings])
  return (
      <div>
          <div style={{textAlign: "end",}}>
              <button id="settings" onClick={toggleSettings}><i className="bi bi-gear"></i> Settings</button>
          </div>
          <div id="settings-container">
              <div className="settings-content">
                  <h2>Settings</h2>
                  <div className="settings-options">
                      <div className="settings-option">
                          <h3>Theme</h3>
                          <div className="theme">
                              <button onClick={() => toggleTheme("light")}><i className="bi bi-sun"></i> Light</button>
                              <button onClick={() => toggleTheme("dark")}><i className="bi bi-moon"></i> Dark</button>
                              <button onClick={() => toggleTheme("system")}><i className="bi bi-gear"></i> System</button><p></p>
                              <button onClick={() => toggleTheme("violet")}><i className="bi bi-moon"></i> Violet</button>
                              <button onClick={() => toggleTheme("sepia")}><i className="bi bi-sun"></i> Sepia</button>
                              <button onClick={() => toggleTheme("black")}><i className="bi bi-moon"></i> Black</button>
                          </div>
                      </div>
                      <div className="settings-option">
                          <h3>Font</h3>
                          <div className="font">
                              <button onClick={() => toggleFont("serif")}><i className="bi bi-type"></i> serif</button>
                              <button onClick={() => toggleFont("sans-serif")}><i className="bi bi-type"></i> sans</button>
                              <button onClick={() => toggleFont("monospace")}><i className="bi bi-type"></i> monospace</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}