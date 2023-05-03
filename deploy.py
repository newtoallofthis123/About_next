try:
    import json
    import os
    import datetime
    from rich.console import Console
    from rich.prompt import Prompt
    from rich.panel import Panel
    import pyfiglet
except ModuleNotFoundError as e:
    print("ModuleNotFoundError: " + str(e))
    print("Sorry, it works only if you have rich and pyfiglet installed. Please install them and try again.")
    exit()


def get_content():
    with open("package.json", "r") as f:
        data = dict(json.loads(f.read()))
        return data


def write_content(content):
    with open("package.json", "w") as file:
        file.write(json.dumps(content, indent=2))
        print("Data updated")


def get_time():
    now = datetime.datetime.now()
    return now.strftime("%Y-%m-%d %H:%M")


def commit():
    os.system("git status")
    exit_try = input(
        "These are the git changes. Press any key to proceed or type 'exit' to exit: ")
    if exit_try == "exit":
        exit()
    msg = Prompt.ask("Commit message")
    os.system("git add .")
    commit_choice = Prompt.ask(
        "Commit and push to github?", choices=["y", "n"])
    if commit_choice == "y":
        os.system("git commit -m \"" + msg + "\"")
        os.system("git push")
        Console().print(
            "Commited to git and pushed to [link=https://github.com/newtoallofthis123/About_next]github.com[/link]")
        Console().print(
            "Check deployment status at [link=https://vercel.com/newtoallofthis123/about-next]vercel.com[/link]")
    else:
        print("Not commited to git or pushed to github")


def deploy():
    data = get_content()
    Console().print(
        "The Current version is [bold red]" + data["version"] + "[/bold red]")
    version = Prompt.ask("Enter the new version")
    data["version"] = version
    Console().log(
        "Version updated to [bold red]" + data["version"] + "[/bold red]")
    write_content(data)
    Console().print("Before deploying, make sure you test out the build.")
    test_ask = Prompt.ask(
        "Do you want to test the build? You will have to restart deployer", choices=["y", "n"])
    if test_ask == "y":
        Console().print("Testing build...")
        os.system("npm run build")
        Console().print("Build successful")
        os.system("npm run start")
    else:
        Console().print("Skipping build test")
        commit()


def main():
    if os.getlogin() != "joshi":
        Console().print("Sorry, you are not authorized to use this script.")
        exit()
    console = Console()
    console.print("Welcome to the [bold red]Deployer[/bold red]")
    console.print("Enter the password to continue")
    password = Prompt.ask("Password", password=True)
    if password == "NoobScience":
        (os.system("clear") if os.name == "posix" else os.system("cls"))
        Console().print(pyfiglet.figlet_format("Deployment Helper v1.0"), style="bold blue")
        Console().print(Panel.fit("Hi NoobScience! Did you call the deployer?"), style="bold blue")
        deploy_choice = Prompt.ask("Answer the deployer's question")
        if deploy_choice == "yes deployer I did call you":
            deploy()
        elif deploy_choice == "":
            Console().print("You didn't answer the deployer's question. He is angry and is not going to deploy the website.")
        else:
            Console().print("The Deployer rejected your request. He says you are not worthy of deploying the website.")
    else:
        print("Wrong password")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        Console().print("\nExiting Peacefully...")
        exit()
    except Exception as e:
        Console().print("Error: " + str(e))
        exit()
