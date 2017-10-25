//await number of promises

async function unicorn() {
    let [rainbow, food] = await Promise.all([getRainbow(), getFood()]);
    return {rainbow, food}
}