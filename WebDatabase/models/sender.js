const mongoose = require("mongoose");

let senderSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    name: {
        type: String,
        required: true,
    },
    parcels: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Parcel'
    }]
});
module.exports = mongoose.model("Sender", senderSchema);