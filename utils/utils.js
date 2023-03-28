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

const ranHash = () => {
    const hash = Math.random().toString(8).substring(2, 5) + Math.random().toString(8).substring(2, 5);
    return hash
}

module.exports = {
    hypens,
    dateTime,
    ranHash
}