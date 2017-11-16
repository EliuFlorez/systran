    var express = require('express');
    var request = require('request');

    var router = express.Router();

    router.post("/", async (req, res, next) => {

    const translated =await translate(req.query.source, "en", req.query.content)

    const translated2 = await translate("en", req.query.target, translated)
});


    const translate = (source, target, content) =>
  new Promise((resolve, reject) =>
    request(`https://api-platform.systran.net/translation/text/translate?input=${content}&source=${source}&target=${target}&key=98155dee-783f-4f90-aea4-7fb357016647`, (err, data, body) => {
      if (err) return reject(err);

      try {
        return resolve(JSON.parse(body).outputs[0].output);
      } catch (e) {
        return reject(e);
      }
    })
  );
    module.exports = router;
