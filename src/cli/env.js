const parseEnv = () => {
    Object.entries(process.env).forEach(([key, value]) => {
        if (key.substring(0, 4) === 'RSS_') {
            console.log(`${key}=${value};`)
        }
    })
};

parseEnv();