export const suma = ( a, b) => {
  return a + b;
};

// INITIALIZE

  const client = stitch.Stitch.initializeDefaultAppClient('laifu-xguzu');

  const db = client.getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas').db('blog');

// ANONYMOUS CREDENTIALS

  client.auth.loginWithCredential(new stitch.AnonymousCredential()).then(user =>
    db.collection('comments').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
  ).then(() =>
    db.collection('comments').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
  ).then(docs => {
      console.log("Found docs", docs)
      console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  }).then(displayComments);

  // ADD COMMENTS

  function addComment() {
    const newComment = document.getElementById("new_comment");
    console.log("add comment", client.auth.user.id)
    db.collection("comments")
      .insertOne({ owner_id : client.auth.user.id, comment: newComment.value })
      .then(displayComments);
    newComment.value = "";
  }

  // DISPLAY COMMENT

  function displayComments() {
    db.collection("comments")
      .find({}, {limit: 1000})
      .toArray()
      .then(docs => {
        const html = docs.map(doc => `<div>${doc.comment}</div>`);
        document.getElementById("comments").innerHTML = html;
      });
  }



