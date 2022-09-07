const reviewsService = require("../services/reviewsService");

const createReviews = async (req, res) => {
  try {
    const { productId, content, rating } = req.body;
    const userId = req.userId;
    const result = await reviewsService.createReviews(
      userId,
      productId,
      content,
      rating
    );

    if (!result) {
      res.status(400).json({ ERROR: "REVIEWS_ALREADY_USE" });
      return;
    }

    return res.status(201).json({ message: "CREATE_REVIEW" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ERROR: "CREATE_REVIEW" });
  }
};

const getReviews = async (req, res) => {
  try {
    const userId = req.userId;
    const getReviews = await reviewsService.getReviews(userId);
    return res.status(200).json({ data: getReviews });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ERROR: "GET_REVIEW" });
  }
};

const updateReviews = async (req, res) => {
  try {
    const { reviewsId, content, rating } = req.body;
    const userId = req.userId;
    await reviewsService.updateReviews(userId, reviewsId, content, rating);
    return res.status(200).json({ message: "UPDATE_REVIEWS" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ERROR: "UPDATE_REVIEWS" });
  }
};

const deleteReviews = async (req, res) => {
  try {
    const { reviewsId } = req.body;
    const userId = req.userId;
    await reviewsService.deleteReviews(userId, reviewsId);
    res.status(200).json({ message: "DELETE_REVIEWS" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ERROR: "DELETE_REVIEWS" });
  }
};

module.exports = { createReviews, getReviews, updateReviews, deleteReviews };
