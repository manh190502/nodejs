const { default: mongoose } = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customerSchema,
    userInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    leader: userSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
  },
  {
    timestamps: true,
  }
);

projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
