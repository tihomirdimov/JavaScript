const url = require('url');
const database = require('../config/database.js');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const multiparty = require('multiparty');
const shortid = require('shortid');

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname

    if (req.pathname === '/product/add' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/products/add.html'));
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.pathname === '/product/add' && req.method === 'POST') {
        let form = new multiparty.Form();

        form.on('part', (part) => {
            if (part.fileName) {
                let dataString = '';
                part.setEncoding('binary');

                part.on('data', (data) => {
                    dataString += data;
                })

                part.on('end', () => {
                    let fileName = shortid.generate();
                    let filePath = '../content/images/products/' + fileName;
                    product.image = filePath;
                    fs.writeFile(`.${filePath}`, dataString, { encoding: 'ascii' }, (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                    });
                });
            } else {
                part.setEncoding('utf-8');
                let field = '';
                part.on('data', (data) => {
                    field += data;
                });
                part.on('end', () => {
                    product[part.name] = field;
                });
            }
        });

        form.on('close', () => {
            database.products.add(product);
            res.writeHead(302, {
                Location: '/'
            });
            res.end();
        });

        form.parse(req);
    } else {
        return true;
    }
}