import Comment from "../models/commentModel";
import Post from "../models/postModel";

const createComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const authorId = req.params.authorId;

    const newComment = await new Comment();
    newComment.content = req.body.content;
    newComment.author = authorId;
    newComment.post = postId;

    await newComment.save();

    // Add newComment._id to related post collection
    const post = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: newComment._id } },
      { new: true }
    );

    res.status(201).send(`Votre commentaire a été ajouté 
    🆕\n${newComment}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de l'ajout du commentaire");
  }
};

const updateComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);

    if (comment) {
      comment.content = req.body.content;
      await comment.save();
      res
        .status(202)
        .send(
          `Commentaire modifié avec succès\nMise à jour : \"${comment.content}\"`
        );
    } else {
      res.status(404).send("Commentaire introuvable");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de la modification du commentaire");
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);

    if (comment) {
      await Comment.deleteOne(comment);
      res.status(200).send(`Commentaire supprimé avec succès`);
    } else {
      res.status(404).send("Commentaire introuvable");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de la suppression du commentaire");
  }
};

export { createComment, updateComment, deleteComment };
