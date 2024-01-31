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
      {
        $push: { comments: newComment._id },
      },
      { new: true }
    );

    res.status(201).send(`Votre commentaire a été ajouté 
    🆕\n${newComment}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur lors de l'ajout du commentaire");
  }
};

export { createComment };
