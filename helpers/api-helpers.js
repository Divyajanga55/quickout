export const postReqAsync = (url, body) => {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    'Content-type': 'application/json; charset=UTF-8',
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

export const getReqAsync = (url, ) => {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      'Content-type': 'application/json; charset=UTF-8',
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  };
  