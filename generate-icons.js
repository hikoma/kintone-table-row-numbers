const sharp = require("sharp");

async function main() {
    for (const size of [16, 48, 128]) {
        await sharp("icon.svg")
            .resize(size, size)
            .png({quality: 100})
            .toFile(`src/icons/${size}.png`);
    }
}

main().then();
