const request = require("../utils/request");

const fetchCatsByOwner = (owner) => {
  return request(`/owners/${owner}/cats`).then((owners) => {
    return owners;
  });
};

fetchCatsByOwner("vel").then((a) => {
  console.log(a);
});

module.exports = fetchCatsByOwner;
