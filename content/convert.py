from rich.console import Console
from rich.panel import Panel
from pyperclip import copy
from markdown import markdown
import sys

def get_args():
    if len(sys.argv) < 3:
        print("Usage: python convert.py [action] [input]")
        sys.exit(1)
    if sys.argv[1] == "help":
        print("Usage: python convert.py [action] [input]")
        sys.exit(1)
    return sys.argv[1], sys.argv[2]

console = Console()
action, input_file = get_args()
console.print(Panel("Markdown to HTML Converter"), style="bold blue", justify="center")
if action == "copy":
    with open(input_file, "r") as f:
        copy(markdown(f.read()))
        console.print("[green]Copied to clipboard![/green]")
elif action == "print":
    console.print("[bold]HTML[/bold] Content:")
    print("===================================")
    with open(input_file, "r") as f:
        console.print(markdown(f.read()))
    print("===================================")
elif action == "serve":
    from flask import Flask, render_template, request
    import webbrowser
    app = Flask(__name__)
    webbrowser.open("http://localhost:5000/{}".format(input_file))
    @app.route("/<input_file>")
    def home(input_file):
        with open(input_file, "r") as f:
            return render_template("index.html", md_content=f.read(), content=markdown(f.read()))
    @app.route("/save", methods=["POST"])
    def save():
        with open(input_file, "w") as f:
            f.write(request.form["content"])
        return "Saved!"

    app.run(debug=True)
else:
    print("Usage: python convert.py [action] [input]")
    sys.exit(1)