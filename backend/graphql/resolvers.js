import mongoose from 'mongoose';
import courseModel from '../models/course';

/*var coursesData = [
    {
        _id: '0',
        title: 'Foo 0',
        author: 'N/A',
        description: 'N/A',
        topic: 'N/A',
        url: 'N/A',
        voteCount: 0
    },
    {
        _id: '1',
        title: 'Foo 1',
        author: 'N/A',
        description: 'N/A',
        topic: 'N/A',
        url: 'N/A',
        voteCount: 0
    },
    {
        _id: '2',
        title: 'Foo 2',
        author: 'N/A',
        description: 'N/A',
        topic: 'N/A',
        url: 'N/A',
        voteCount: 0
    },
    {
        _id: '3',
        title: 'Foo 3',
        author: 'N/A',
        description: 'N/A',
        topic: 'N/A',
        url: 'N/A',
        voteCount: 0
    }
];*/

const resolvers = {
    Query: {
        allCourses: (root, {searchTerm}) => {
            // return coursesData;
            if (searchTerm !== '') {
                return courseModel.find({$text: {$search: searchTerm}}).sort({voteCount: 'desc'});
            } else {
                return courseModel.find().sort({voteCount: 'desc'});
            }
        },
        course: (root, {id}) => {
            // return coursesData.filter(course => course.id === id)[0];
            // TODO use when use MONGODB
            return courseModel.findOne({ _id: id });
        }
    },
    Mutation: {
        upvote: (root, {id}) => {
            // const course = coursesData.filter(course => course.id === id)[0];
            // course.voteCount++;
            // return course;
            return courseModel.findByIdAndUpdate(id, {$inc: {voteCount: 1}}, { returnNewDocument: true });
        },
        downvote: (root, {id}) => {
            // const course = coursesData.filter(course => course.id === id)[0];
            // course.voteCount--;
            // return course;
            console.log('here');
            return courseModel.findByIdAndUpdate(id, {$inc: {voteCount: -1}}, { returnNewDocument: true, runValidators: true });
        },
        addCourse: (root, {title, author, description, topic, url}) => {
            const course = new courseModel({title: title, author: author, description: description, topic: topic, url: url});
            return course.save();
        }
    }
}

export default resolvers;
