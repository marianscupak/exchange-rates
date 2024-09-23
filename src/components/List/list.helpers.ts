// source: https://dev.to/jorik/country-code-to-flag-emoji-a21
export const getFlagEmoji = (countryCode: string) => {
    // hack to fix IMF as it is not a country
    if (countryCode === "XD") {
        return "🏳️";
    }
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
};
