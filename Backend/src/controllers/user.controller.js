import { User } from "../models/User.js";

// Function to generate a random 4-letter string
const generateRandomLetters = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result;
};

// Function to check if the generated certificate number is unique
const isCertificateNumberUnique = async (certificateNumber, User) => {
  const existingDocument = await User.findOne({ certificateNumber });
  return !existingDocument;
};


// Function to generate a unique certificate number
const generateUniqueCertificateNumber = async (User) => {
  let certificateNumber;
  do {
    certificateNumber = generateRandomLetters();
  } while (!(await isCertificateNumberUnique(certificateNumber, User)));

  return certificateNumber;
};

// Usage example
// Assuming User is your Mongoose model
// Replace User with your actual model name

export const addUser = async (req, res) => {
  try {
    
    const data = req.body;
    console.log(data);
    const certificateNumber = await generateUniqueCertificateNumber(User);
    const newUser = new User({
      certificate_num: certificateNumber,
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      category: data.category,
      company_name: data.company_name,
      gst_no: data.gst_no,
      payment_status: data.payment_status,
    });

    await newUser.save();

    res.json({
      status: 200,
      success: true,
      data: { user: newUser },
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: 500,
      success: false,
      message: "internal server error",
    });
  }
};
