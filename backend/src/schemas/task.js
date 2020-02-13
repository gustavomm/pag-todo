import Joi from 'joi';

const taskKeys = {
    name: Joi.string().max(60).required().label('Name'),
    description: Joi.string().max(60).label('Description'),
    completed: Joi.boolean().required().label('Completed')
};

export const createTask = Joi.object().keys(taskKeys);