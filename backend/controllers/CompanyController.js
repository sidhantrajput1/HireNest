import Company from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName, userId } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Compnay name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't register same company",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId:userId,
    });

    return res.status(200).json({
      message: "Company registered Successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req._id;
    // console.log("userId : ", userId)
    const companies = await Company.find({ userId });

    if (companies.length === 0) { // Check if the array is empty
      return res.status(404).json({
        message: "No companies found for this user",
        success: false,
      });
    }

    return res.status(200).json({
      companies, // changed company to companies for consistency
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!companyId) {
      return res.status(400).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(201).json({
      message: "Company fetch successfully",
      success: true,
      company,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    const updateCompany = await Company.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        website,
        location,
      },
      { new: true, runValidators: true }
    );

    if (!updateCompany) {
        return res.status(404).json({
            message : "User Not Found",
            success : false,
        })
    }

    await updateCompany.save();

    return res.status(201).json({
        message : "Company information Successfully",
        success : true,
        updateCompany
    })

  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "Server Error",
      success: false,
    });
  }
};
