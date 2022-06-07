const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        eventName: { type: String, required: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        eventInfo: { type: String, required: true },
        subcription_user_id: [
          { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
        ],
        creator_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: false,
        },
        startDate:{ type: String, required: true},
        endDate:{ type: String, required: true},
      },
      {
        versionKey: false,
        timestamps: true,
      }
)

Event = mongoose.model('event',eventSchema);

module.exports = Event;