import Application from "./../models/application.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req._id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(200).json({
        message: "Job id is required",
        success: false,
      });
    }

    // check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    // check if the jobs exist
    const job = await Application.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }

    // create a new application
    const newApplication = await Application.create({
      job: jobId,
      userId: userId,
    });

    job.newApplication.push(newApplication);
    await job.save();

    return res.status(200).json({
      message: "Job Application applied successfully",
      status: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getApplication = async (req, res) => {
  try {

    const userId = req._id;

    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options:{sort:{createdAt:-1}},
        populate:{
            path : 'company',
            options : {sort : { createdAt : -1}}
        }
      });

    if (!application) {
      return res.status(400).json({
        message: "No Application",
        message: false,
      });
    }

    return res.status(201).json({
      application,
      success: true,
    });
    
  } catch (error) {
    console.log(error);
  }
};
