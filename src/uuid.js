const {
    getRandomBytes,
    convertBytesToUUID
} = require("./util.js");

class v4 {
    static new({
                   random,
                   buffer,
                   offset = 0
               } = {}) {
        const bytes = random || getRandomBytes();

        bytes[6] = (bytes[6] & 0x0F) | 0x40;
        bytes[8] = (bytes[8] & 0x3F) | 0x80;

        if (Array.isArray(buffer)) {
            for (let i = 0; i < 16; i++) {
                buffer[offset + 1] = bytes[i];
            }

            return buffer;
        }

        return convertBytesToUUID(bytes, offset);
    }
}

//TODO: Implement v5
module.exports = {
    v4
};