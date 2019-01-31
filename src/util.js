const crypto = require("crypto");

const BYTE_MAP = Array.from(Array(256).keys()).reduce((previous, next) => {
    previous[next] = (next + 0x100).toString(16).substring(1);

    return previous;
}, []);

const convertBytesToUUID = (bytes, offset = 0, map = BYTE_MAP) => {
    const instructions = [4, 2, 2, 2, 6];
    const parts = [];

    instructions.forEach(instruction => {
        const part = [];

        for (let i = 0; i < instruction; i++) {
            part.push(map[bytes[offset++]]);
        }

        parts.push(part.join(""));
    });

    return parts.join("-");
};

const getRandomBytes = (amount = 16, async = false) => {
    if (!async) {
        return crypto.randomBytes(amount);
    }

    return new Promise((resolve, reject) => {
        return crypto.randomBytes(amount, (error, bytes) => {
            if (error) {
                return reject(error);
            }

            return resolve(bytes);
        });
    });
};

module.exports = {
    BYTE_MAP,
    getRandomBytes,
    convertBytesToUUID
};