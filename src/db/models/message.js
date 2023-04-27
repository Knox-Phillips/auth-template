const knex = require('../knex');

class message {
    static async getMessageHistory() {
        try {
            const messages = await knex("messages").select();
            return messages;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async insertMessage(messages,userID) {
        try {
          const result = await knex("messages").insert({
            messages,
            user_id:userID,
            time_created: new Date(),
          });
          return result;
        } catch (err) {
          console.error(err);
          return null;
        }
      }
}

module.exports = message