const { json } = require('express');
const fs = require('fs');
const path = './server/db/messages';

module.exports = {
    async load(req, res) {
        try {
            const result = await fs.readFileSync(`${path}/${req.params.userId}/${req.params.id}.json`, 'utf-8');
            if (result) {
                res.json(result);
            }
        }
        catch {
            res.sendStatus('503');
        }
    },
    write(req, res) {
        try {
            fs.readFile(`${path}/${req.params.userId}/${req.params.id}.json`, req.body, function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    const arr = JSON.parse(data);
                    arr.push(req.body);
                    const json = JSON.stringify(arr);
                    fs.writeFile(`${path}/${req.params.userId}/${req.params.id}.json`, json, 'utf8', function(err){
                        if(err) throw err;
                    });
                }
            });
            res.sendStatus('200');
        } catch {
            res.status('500');
        }
    }
}