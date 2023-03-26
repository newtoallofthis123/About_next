from rich.console import Console
from rich.prompt import Prompt
from rich import print_json
from dotenv import dotenv_values
from pymongo import MongoClient
import datetime

config = dotenv_values(".localenv")
client = MongoClient(config["MONGO_URL"])
console = Console()

def get_time():
    now = datetime.datetime.now()
    return now.strftime("%Y-%m-%d %H:%M")


def get_input(output):
    while True:
        line = input()
        if line:
            output.append(line)
        else:
            break
    return output

def updates():
    db = client["updates"]
    collection = db["page"]
    update_name = Prompt.ask("Enter the name of the update")
    print("Enter the content of the update. Press enter twice to exit")
    update_content = '.\n'.join(get_input([]))
    update_id = update_name.lower().replace(' ', '-')
    collection.insert_one({"hash": update_id, "name": update_name, "content": update_content, "date": str(get_time()) })

def links():
    db = client["updates"]
    collection = db["links"]
    link_name = Prompt.ask("Enter Name of the link")
    print("Enter the content of the update. Press enter twice to exit")
    link_content = '.\n'.join(get_input([]))
    link_url = Prompt.ask("Enter the URL of the link")
    link_id = link_name.lower().replace(' ', '-')
    collection.insert_one({"hash": link_id, "name": link_name, "content": link_content, "url": link_url, "date": str(get_time()) })

def go():
    db = client["updates"]
    collection = db["go"]
    go_url = Prompt.ask("Enter URL of the link")
    go_slug = Prompt.ask("Enter the slug of the link")
    collection.insert_one({"url": go_url, "slug": go_slug})

def handle(action):
    if action == "updates":
        updates()
    if action == "links":
        links()
    if action == "go":
        go()
def main():
    console.print("Hello, world!")
    action = Prompt.ask("What do you want to do?", choices=["updates", "links", "go", "commit"])
    handle(action)

if __name__ == "__main__":
    main()