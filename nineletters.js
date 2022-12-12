const fs = require('fs');

const main = () => {

    try {
        const data = fs.readFileSync('words_dictionary.json', 'utf8');
        const dict = JSON.parse(data);

        const nineLetterList = Object.keys(dict).filter(key => key.length === 9)

        fs.writeFileSync('ninelettersMegan.json', JSON.stringify(nineLetterList))
    } catch (err) {
        console.error(err);
    }
}

main()
