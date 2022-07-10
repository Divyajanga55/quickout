import clientPromise from "../../../mongodb/connection";
async function studentprofile(req, res) {
  const client = await clientPromise;
  const db = client.db("quickout");
  const userCollection = db.collection("users");
  const allUsers = await userCollection.find({}).toArray();
  res.status(200).json(allUsers);
}
export default studentprofile;
