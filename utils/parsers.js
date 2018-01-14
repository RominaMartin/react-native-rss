import {parseString} from 'react-native-xml2js'

export function parseOnionData(data) {
    var formatedData = [];
    parseString(data, function (err, result) {
        for(let i = 0; i < result.rss.channel[0].item.length; i++) {
            let singleItem = result.rss.channel[0].item[i];
            let image = (singleItem.description[0].match(/<img src="(.*)"\s*\/>/))[1];
            let description = (singleItem.description[0].match(/<p>([^<]*)<\/p>/));
            description = description === null ? "" : description[1];

            let singleFormated = {
                title: singleItem.title[0],
                link: singleItem.link[0],
                description: description,
                date: singleItem.pubDate[0],
                key: singleItem.guid[0]["_"],
                image: image
            };
            formatedData.push(singleFormated);
        }
    });
    return formatedData;
};