import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

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
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }

    // create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.application.push(newApplication);
    await job.save();

    return res.status(200).json({
      message: "Job Application applied successfully",
      status: true,
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
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!application) {
      return res.status(400).json({
        message: "No Application",
        success: false,
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

export const getApplicant = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application", 
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant", 
      },
    });
    

    if (!job) {
      return res.status(404).json({
        message: "No Applicant",
        success: false,
      });
    }

    return res.status(201).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};


export const updateStatus = async (req, res) => {
  try {
    const {status} = req.body;
    const applicationId = req.params.id;
    // console.log(applicationId)

    if (!status) {
      return res.status(400).json({
        message : 'Status is requires',
        success  : false
      })
    }

    // find the application by application id
    const application = await Application.findOne({_id : applicationId})
    if (!application) {
      return res.status(400).json({
        message : 'Application not found',
        success : false
      })
    }

    // update the status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message : 'Update Successfully',
      application,
      success : true
    })
  } catch (error) {
    console.log(error)
  }
}