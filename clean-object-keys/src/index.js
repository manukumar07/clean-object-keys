// Removes null, undefined, and empty string keys
function cleanObject(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([, value]) => value !== null && value !== undefined && value !== ""
        )
    );
}

module.exports = { cleanObject };