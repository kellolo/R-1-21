const fs = require('fs');
const { add } = require('process');
const path = './server/db/chats';

module.exports = {
    async load(req, res) {
        try {
            const result = await fs.readFileSync(`${path}/${req.params.id}/chats.json`, 'utf-8');
            res.json(result);
        }
        catch {
            res.sendStatus(503);
        }
    },
    async add(req, res) {
        try {
            const { userId, name, text, img, id } = req.body;
            const data = JSON.parse(await fs.readFileSync(`${path}/${userId}/chats.json`, 'utf-8'));
            console.log(data);
            data.push({ name, text, img, id });

            fs.writeFile(`${path}/${userId}/chats.json`, JSON.stringify(data),
                err => {
                    if (!err) {
                        res.json({ ok: true });
                    } else {
                        res.sendStatus(503);
                    }
                });
        }
        catch {
            res.sendStatus(404);
        }
    }
};