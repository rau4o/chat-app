import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
const cors = require('cors')({origin: true});
const StreamChat = require('stream-chat').StreamChat;

const serverStreamClient = StreamChat.getInstance(
  functions.config().stream.key,
  functions.config().stream.secret
);

admin.initializeApp();
export const createStreamUser = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const {user} = request.body;
    if (!user) {
      throw new functions.https.HttpsError('failed-precondition', 'Bad Request')
    } else {
      try {
        await serverStreamClient.upsertUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
        })
        response.status(200).send({message: 'User created'});
      } catch (error) {
        throw new functions.https.HttpsError('aborted', 'Could not create stream user')
      }
    }
  })
});

export const createStreamToken = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const {user} = request.body;
    if (!user) {
      throw new functions.https.HttpsError('failed-precondition', 'The function')
    }
    try {
      const token = await serverStreamClient.createToken(user.uid);
      response.status(200).send({token});
    } catch (err) {
      throw new functions.https.HttpsError('aborted', 'Could not get stream user')
    }
  })
})