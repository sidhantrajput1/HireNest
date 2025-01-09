import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      email,
      password: hashPassword,
      phoneNumber,
      role,
    });

    return res.status(201).json({
      message: "User Register successfully",
      success: true,
      data: {
        newUser
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please provide correct email and password",
        success: false,
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        message: "Incorrect email and password",
        success: false,
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({
        message: "Incorrect password, please enter your correct password",
        success: false,
      });
    }

    if (role.toLowerCase() !== user.role.toLowerCase()) {
      return res.status(400).json({
        message: "Account does not exist with current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,  // Fixed expiration time to 1 day
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        success: true,
        data: {
          user,
        },
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong, please try again later",
      success: false,
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, bio, skills } = req.body;

    // if (!fullname || !email || !phoneNumber || !password || !bio || !skills) {
    //   return res.status(400).json({
    //     message: "Something is missing",
    //     success: false,
    //   });
    // }

    let splitArray;
    if (skills) {
      splitArray = skills.split(", ");
    }
    const userId = req._id;

    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        fullname,
        email,
        phoneNumber,
        password,
        bio,
        "profile.skills": splitArray || [],
      },
      { new: true, runValidators: true }
    );

    if (!updateUser) {
      return res.status(400).json({
        message: "User not found",
        success : false
      });
    }

    await updateUser.save();

    return res.status(201).json({
        message : 'User profile update Successfully',
        success : true,
        data : {
          updateUser
        }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message: "Server error",
        success: false,
    });
  }
};


