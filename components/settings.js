import React, {useState, useEffect} from 'react'

export default function Settings({ blog = "false" }) {
    (blog == "true") ? blog = true : blog = false
    const [settings, setSettings] = useState(false)
    const toggleSettings = () => {
        setSettings(!settings)
    }
    const fontIncrease = () => {
        let fontSize = getComputedStyle(document.documentElement).getPropertyValue("--blog-font-size")
        fontSize = parseFloat(fontSize)
        fontSize += 0.2
        document.documentElement.style.setProperty("--blog-font-size", fontSize + "rem")
        document.documentElement.style.setProperty("--blog-line-height", (fontSize+ 0.6) + "rem")
    }
    const fontDecrease = () => {
        let fontSize = getComputedStyle(document.documentElement).getPropertyValue("--blog-font-size")
        fontSize = parseFloat(fontSize)
        fontSize -= 0.2
        document.documentElement.style.setProperty("--blog-font-size", fontSize + "rem")
        document.documentElement.style.setProperty("--blog-line-height", (fontSize+0.6) + "rem")
    }
    const fontReset = () => {
        let fontSize = getComputedStyle(document.documentElement).getPropertyValue("--blog-font-size")
        fontSize = parseFloat(fontSize)
        fontSize = 1.2
        document.documentElement.style.setProperty("--blog-font-size", fontSize + "rem")
        document.documentElement.style.setProperty("--blog-line-height", (fontSize + 0.6) + "rem")
    }
    const toggleTheme = (theme) => {
        if (theme === "system") {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme = "dark"
            }
            else {
                theme = "light"
            }
        }
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }
    const toggleFont = (font) => {
        document.documentElement.setAttribute("data-font", font)
        localStorage.setItem("font", font)
    }
    useEffect(() => {
        let theme = localStorage.getItem("theme")
        let font = localStorage.getItem("font")
        if (theme === null) {
            theme = "system"
        }
        if (font === null) {
            font = "sans-serif"
        }
        toggleTheme(theme)
        toggleFont(font)
    }, [])
  return (
      <div>
          <div>
              <div style={{ textAlign: "end", }}>
                  <button className="settings" onClick={toggleSettings}><i className="bi bi-gear"></i> Settings</button>
                  {
                      (blog == true) ?
                          <span>
                               | <button className='settings' onClick={fontIncrease}><i className="bi bi-plus"></i> Increase</button> |
                              <button className='settings' onClick={fontDecrease}><i className="bi bi-dash"></i> Decrease</button> |
                              <button className='settings' onClick={fontReset}><i className="bi bi-repeat"></i> Reset</button>
                          </span>
                            : null
                  }
              </div>
          </div>
          <div
              style={
                  (settings)?{ display: "block" }:{ display: "none"}
              }
              id="settings-container">
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