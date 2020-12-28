import Messages from "../models/message";

class Message {
  static async create(req, res, next) {
    try {
      const message = await Messages.create(req.body);
      return res.status(200).json({ success: true, data: message });
    } catch (error) {
      res.status(401).json({ message: error });
    }
  }
}

export default Message;