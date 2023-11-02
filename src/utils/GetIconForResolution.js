export const getIconForResolution = (screenWidth) => {
    if (screenWidth > 890) {
        return {
            github: '#github',
            tg: '#tg',
            ln: '#ln',
            inst: '#inst',
        }
    }
    else {
        return {
            github: '#github890',
            tg: '#tg890',
            ln: '#ln890',
            inst: '#inst890',
        }
    }

}