module.exports = (item) => {
    if (item == null) {
        return item;
    }
    if (typeof item === "string") {
        return camelizeStr(item);
    }
    if (typeof item === "object") {
        return camelizeObj(item);
    }
    return item;
};

function camelizeObj(obj) {
    if (obj == null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(camelizeObj);
    }
    if (typeof obj !== "object") {
        return obj;
    }

    const newObj = {};

    for (const k in obj) {
        if (!obj.hasOwnProperty(k)) {
            continue;
        }
        const v = obj[k];
        const newk = camelizeStr(k);
        newObj[newk] = camelizeObj(v);
    }
    return newObj;
}

function camelizeStr(str) {
    if (typeof str !== "string") {
        return str;
    }
    if (str === str.toUpperCase()) {
        return str.toLowerCase();
    }
    if (str === str.toLowerCase()) {
        return str;
    }
    const chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        if (i === 1 && !isUpper(chars[i])) {
            break;
        }
        const hasNext = i + 1 < chars.Length;
        if (i > 0 && hasNext && !isUpper(chars[i + 1])) {
            break;
        }

        chars[i] = chars[i].toLowerCase(chars[i]);
    }
    return chars.join("");
}

function isUpper(char) {
    return char === char.toUpperCase();
}
