const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/cidade/:cidade/:token', function(req, res, next) {
  fetch(
    `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${req.params.cidade}&token=${req.params.token}`
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }

      response.json().then(function(data) {
        return res.json(data[0]);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
});

app.get('/clima/:id/:token', function(req, res, next) {
  fetch(
    `http://apiadvisor.climatempo.com.br/api-manager/user-token/${req.params.token}/locales`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ localeId: [req.params.id] }),
    }
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }

      fetch(
        `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${req.params.id}/current?token=${req.params.token}`
      )
        .then(function(response) {
          if (response.status !== 200) {
            console.log(
              `Looks like there was a problem. Status Code: ${response.status}`
            );
            return;
          }

          response.json().then(function(data) {
            res.json(data);
          });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
});

module.exports = app;
