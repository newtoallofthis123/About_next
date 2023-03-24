import os
import json
import datetime
from rich.console import Console
from rich.prompt import Prompt
import pyfiglet

URL = os.path.join("C:", os.sep, "Users", "joshi", "Projects", "Assets", "data.json")
DIR = os.path.join("C:", os.sep, "Users", "joshi", "Projects", "Assets")

def get_content():
    with open(URL, "r") as f:
        data = dict(json.loads(f.read()))
        return data
    
def write_content(content):
    with open(URL, "w") as file:
        file.write(json.dumps(content, indent=2))
        print("Data updated")

def get_input(output):
    while True:
        line = input()
        if line:
            output.append(line)
        else:
            break
    return output


def get_time():
    now = datetime.datetime.now()
    return now.strftime("%Y-%m-%d %H:%M")

def add_data(action):
    data = get_content()
    if action == "updates":
        update_name = Prompt.ask("Enter the name of the update")
        update_content = Prompt.ask("Enter the content of the update")
        update_id = str(len(data["updates"]) + 1)
        data["updates"].append({"id": update_id, "name": update_name, "content": update_content, "date": str(get_time()) })
        write_content(data)
    if action == "links":
        link_name = Prompt.ask("Enter Name of the link")
        link_content = Prompt.ask("Enter the content of the link")
        link_url = Prompt.ask("Enter the URL of the link")
        link_id = str(len(data["links"]) + 1)
        data["links"].append({"id": link_id, "name": link_name, "content": link_content, "url": link_url, "date": str(get_time()) })
        write_content(data)
    if action == "go":
        go_url = Prompt.ask("Enter URL of the link")
        go_slug = Prompt.ask("Enter the slug of the link")
        data["go"].append({"url": go_url, "slug": go_slug})
        write_content(data)
    if action == "commit":
        os.system("git status")
        exit_try = input("These are the git changes. Press any key to proceed or type 'exit' to exit: ")
        if exit_try == "exit":
            exit()
        msg = Prompt.ask("Commit message")
        os.system("git add .")
        commit_choice = Prompt.ask("Commit and push to github?", choices=["y", "n"])
        if commit_choice == "y":
            os.system("git commit -m \"" + msg + "\"")
            os.system("git push")
            Console().print("Commited to git and pushed to github")
        else:
            Console().print("Not commited to git or pushed to github")
    if action == "edit":
        edit_id = Prompt.ask("Enter the id of the update/link you want to edit")
        if edit_id not in [str(i) for i in range(1, len(data["updates"]) + 1)] and edit_id not in [str(i) for i in range(1, len(data["links"]) + 1)]:
            Console().print("Invalid id")
            create_choice = Prompt.ask("Do you want to create a new update/link?", choices=["y", "n"])
            if create_choice == "y":
                create_type = Prompt.ask("Do you want to create a update or a link", choices=["updates", "links"])
                if create_type == "updates":
                    add_data("updates")
                if create_type == "links":
                    add_data("links")
                if create_type == "go":
                    add_data("go")
            else:
                exit()
        edit_type = Prompt.ask("Do you want to edit the a update or a link", choices=["updates", "links"])
        edit_index = int(edit_id) - 1
        if edit_type == "updates":
            Console().print(f"Editing update [bold blue]{edit_id}[/bold blue]")
            edit_name = Prompt.ask("Enter the name of the update", default=data["updates"][edit_index]["name"])
            edit_content = '.\n'.join(get_input([]))
            data["updates"][edit_index]["name"] = edit_name
            data["updates"][edit_index]["content"] = edit_content
            write_content(data)
        if edit_type == "links":
            Console().print(f"Editing link [bold blue]{edit_id}[/bold blue]")
            edit_name = Prompt.ask("Enter Name of the link", default=data["links"][edit_index]["name"])
            edit_content = Prompt.ask("Enter the content of the link", default=data["links"][edit_index]["content"])
            edit_url = Prompt.ask("Enter the URL of the link", default=data["links"][edit_index]["url"])
            data["links"][edit_index]["name"] = edit_name
            data["links"][edit_index]["content"] = edit_content
            data["links"][edit_index]["url"] = edit_url
            write_content(data)
        if edit_type == "go":
            Console().print(f"Editing go link [bold blue]{edit_id}[/bold blue]")
            edit_url = Prompt.ask("Enter URL of the link", default=data["go"][edit_index]["url"])
            edit_slug = Prompt.ask("Enter the slug of the link", default=data["go"][edit_index]["slug"])
            data["go"][edit_index]["url"] = edit_url
            data["go"][edit_index]["slug"] = edit_slug
            write_content(data)

def delete():
    data = get_content()
    delete_id = Prompt.ask("Enter the id of the update/link you want to delete")
    if delete_id not in [str(i) for i in range(1, len(data["updates"]) + 1)] and delete_id not in [str(i) for i in range(1, len(data["links"]) + 1)]:
        Console().print("Invalid id")
        exit()
    delete_type = Prompt.ask("Do you want to delete the a update or a link", choices=["updates", "links"])
    delete_index = int(delete_id) - 1
    if delete_type == "updates":
        Console().print(f"Deleting update [bold blue]{delete_id}[/bold blue]")
        del data["updates"][delete_index]
        write_content(data)
    if delete_type == "links":
        Console().print(f"Deleting link [bold blue]{delete_id}[/bold blue]")
        del data["links"][delete_index]
        write_content(data)
    if delete_type == "go":
        Console().print(f"Deleting go link [bold blue]{delete_id}[/bold blue]")
        del data["go"][delete_index]
        write_content(data)

def commit():
    os.chdir(DIR)
    os.system("pwd")
    os.system("git status")
    input("These are the git changes. Press enter to proceed")
    msg = "Add Updates"
    os.system("git add .")
    commit_choice = Prompt.ask("Commit and push to github?", choices=["y", "n"])
    if commit_choice == "y":
        os.system("git commit -m \"" + msg + "\"")
        os.system("git push")
        print("Commited to git and pushed to github")
    else:
        print("Not commited to git or pushed to github")

def main():
    if not os.path.exists(URL):
        with open(URL, "w") as f:
            f.write(json.dumps({"updates": [], "links": []}, indent=2))
    if os.getlogin() != "joshi":
        Console().print("This program can only be run on my computer")
        exit()
    console = Console()
    console.print("Welcome to the [bold red]Updates[/bold red] and [bold red]Links[/bold red] updater")
    console.print("Enter the password to continue")
    password = Prompt.ask("Password", password=True)
    if password == "NoobScience":
        (os.system("clear") if os.name == "posix" else os.system("cls"))
        Console().print(pyfiglet.figlet_format("Updates Manager v1.0"), style="bold blue")
        console.print("Enter the action you want to perform")
        action = Prompt.ask("Action", choices=["updates", "links", "go", "edit", "commit", "delete", "exit"])
        if action == "exit":
            Console().print("Exiting...")
            exit()
        add_data(action)
        commit()
    else:
        console.print("Incorrect password")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        Console().print("\nExiting the application because you said so...")
        exit()