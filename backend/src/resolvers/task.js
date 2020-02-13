import Joi from 'joi';
import mongoose from 'mongoose';
import {
    UserInputError
} from 'apollo-server-express';
import {
    createTask
} from '../schemas';
import {
    Task
} from '../models';

export default {
    Query: {
        tasks: (root, args, ctx, info) => {
            return Task.find({});
        }
    },

    Mutation: {
        addTask: async (root, args, ctx, info) => {
            const newTask = {
                name: args.name,
                completed: false,
                description: args.description
            };

            await Joi.validate(newTask, createTask, {
                abortEarly: false
            });

            return Task.create(newTask);
        },

        completeTask: async (root, { taskId }, ctx, info) => {
            const task = await Task.findById(taskId);

            return task.completeTask();
        },

        editName: async (root, args, ctx, info) => {
            const task = await Task.findById(args.taskId);

            return task.editName(args.name);
        },

        editDescription: async (root, args, ctx, info) => {
            const task = await Task.findById(args.taskId);

            return task.editDescription(args.description);
        },

        markAsIncomplete: async (root, { taskId }, ctx, info) => {
            const task = await Task.findById(taskId);

            return task.markAsIncomplete();
        },

        removeTask: async (root, { taskId }, ctx, info) => {
            const task = await Task.findById(taskId);

            try {
                await task.remove(err => !err);
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        },
    }
};