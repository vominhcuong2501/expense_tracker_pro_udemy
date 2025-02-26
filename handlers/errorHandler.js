const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something went wrong');

  if (error) {
    console.log(error);
    res.status(400).json({ status: "failed", error: error });
  } else {
    next();
  }
}

module.exports = errorHandler;