import Job from './../models/job.model.js'


const PostJob = async (req, res) => {
    try {

        const {title, description, requirements, salary, location, experience,  jobType, position, company, created_by, application} = req.body

        const userID = req._id
    
        if (!title || !description || !requirements || !salary || !location || !experience || !jobType || !position || !company || !created_by || application) {
            return res.status(404).json({
                message : "Something is missing",
                success : false
            })
        }
    
        const job = await Job.create({
            title, 
            description,
            requirements: requirements.split(", "),
            experience,
            salary : Number(salary),
            location, 
            jobType,
            position, 
            company, 
            created_by : userID, 
            application
        })

    
        return res.status(200).json({
            message : "new job posted succesfully",
            job,
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}