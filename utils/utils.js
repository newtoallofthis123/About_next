const hypens = (str) => {
    const hyphenatedStr = str.toLowerCase().replace(/\s+/g, "-");
    return hyphenatedStr
}

const dateTime = () => {
    // get current date and time
    const now = new Date();

    // extract the date components
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // add leading zero if needed
    const day = now.getDate().toString().padStart(2, '0'); // add leading zero if needed

    // extract the time components
    const hours = now.getHours().toString().padStart(2, '0'); // add leading zero if needed
    const minutes = now.getMinutes().toString().padStart(2, '0'); // add leading zero if needed
    const datetime = `${year}-${month}-${day} ${hours}:${minutes}`;

    return datetime
}

const dateUTC = () => {
    // get current date and time
    const now = new Date();
    const date = now.toUTCString();
    return date
}

const dateHash = () => {
    // get current date and time
    const now = new Date();

    // extract the date components
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // add leading zero if needed
    const day = now.getDate().toString().padStart(2, '0'); // add leading zero if needed

    const datetime = `${year}${month}${day}`;

    return datetime
}

const getTime = () => {
    const date = new Date()
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const time = date.toLocaleString('en-US', options)
    return time
}

const ranHash = () => {
    let hash = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 6; i++) {
        hash += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return hash;
}

const emailValidate = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = {
    hypens,
    dateTime,
    ranHash,
    dateHash,
    getTime,
    dateUTC,
    emailValidate
}