export default (seconds) => {
    const levels = [
        [Math.floor(seconds / 31536000), 'р'],
        [Math.floor((seconds % 31536000) / 86400), 'дн'],
        [Math.floor(((seconds % 31536000) % 86400) / 3600), 'год'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'хв'],
    ];
    let returnText = '';

    for (let i = 0; i < levels.length; i++) {
        if ( levels[i][0] === 0 ) continue;
        returnText += ` ${levels[i][0]} ${levels[i][1]}`;
    }
    return returnText.trim();
}
