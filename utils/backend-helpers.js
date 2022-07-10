export const onlyPost = (handler) => {
  return (req, res) => {
    if (req.method === 'POST') {
      handler(req, res);
    } else {
      res.status(404).json({ message: 'Invalid request' });
    }
  };
};

export const onlyGet = (handler) => {
  return (req, res) => {
    if (req.method === 'GET') {
      handler(req, res);
    } else {
      res.status(404).send('Invalid request');
    }
  };
};


