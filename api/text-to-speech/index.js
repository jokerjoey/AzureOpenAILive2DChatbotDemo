// const temp = require('temp');
// const fs = require('fs');

const ttsregion = "TTSREGION";
const ttsapikey = "TTSAPIKEY";


const { textToSpeech } = require('./azure-cognitiveservices-speech');

module.exports = async function (context, req) {
    let body = req.body;

    context.log(body);
    // var tempName = temp.path({ suffix: '.wav' });
    // ;

    context.res = {
        status: 200,
        headers: {
            "Content-Disposition": `attachment; filename=voice.wav`,
            "access-control-allow-origin": "*",
            "content-type": "audio/x-wav",
        },
        body: await textToSpeech(ttsapikey, ttsregion, body)
    };
    context.done();
}