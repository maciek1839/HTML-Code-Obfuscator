const APP_KEY = 'HTML_OBFUSCATOR_USER_COFNIG'

export function saveConfig(userConfig) {

    if (localStorage.getItem(APP_KEY) == null) {
        localStorage.setItem(APP_KEY, JSON.stringify([userConfig]));
    } else {
        let list = getConfigs();
        list.push(userConfig);

        localStorage.setItem(APP_KEY, JSON.stringify(list));
    }

}

export function getConfigs() {
    let configList = JSON.parse(localStorage.getItem(APP_KEY));

    return configList;
}

export function clearUserConfigs() {
    localStorage.removeItem(APP_KEY);
}

export function createUserConfig(name, config) {
    console.log(config);
    return { 'title': name, 'config': config };
}

export function getConfig(title) {
    let config = null;
    getConfigs().forEach(element => {
        if (element.title === title) {
            config = element.config;
        }
    });

    return config;
}