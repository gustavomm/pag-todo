import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean
}, {
    timestamps: true
});

taskSchema.methods.completeTask = async function () {
    this.completed = true;

    await this.save();

    return this;
};

taskSchema.methods.editName = async function (name) {
    this.name = name;

    await this.save();

    return this;
};

taskSchema.methods.editDescription = async function (description) {
    this.description = description;

    await this.save();

    return this;
};

taskSchema.methods.markAsIncomplete = async function () {
    this.completed = false;

    await this.save();

    return this;
};

const Task = mongoose.model('Task', taskSchema);

export default Task;