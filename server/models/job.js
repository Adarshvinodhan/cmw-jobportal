import mongoose from 'mongoose';


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    company: {
        type: String,
        
    },
    logo: {
        type: String
    },
    location: {
        type: String,
        
    },
    type: {
        type: String,
       
    },
    salary: {
        type: String,
     
    },
    experience: {
        type: String,
     
    },
    description: {
        type: String,
      
    },
    deadline: {
        type: Date,
  
    },
    posted: {
        type: Date,
        default: Date.now
    }
},{timestamps: true});

const Job = mongoose.model('Job', jobSchema);
export default Job 
   