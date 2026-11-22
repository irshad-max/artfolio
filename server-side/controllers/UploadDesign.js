import Design from "../model/DesignCollection.js";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "Artfolio",
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    Readable.from(buffer).pipe(stream);
  });
};

export const Degin_Collcetion = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload an image",
      });
    }

  const result = await uploadToCloudinary(req.file.buffer);

    const design = await Design.create({
      photo: result.secure_url,
      public_id: result.public_id,
      Description: req.body.Description,
      category: req.body.category,
    });

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      design,
    });

  } catch (error) {
    console.log("Upload error:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};