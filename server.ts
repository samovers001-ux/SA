import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
  });

  // API Route for Booking
  app.post("/api/book", async (req, res) => {
    console.log("POST /api/book called");
    try {
      const bookingData = req.body;
      
      console.log("New Booking Received:", JSON.stringify(bookingData, null, 2));

      // Email options
      const fromEmail = process.env.SMTP_USER || "info@sandamovers.ca";
      const toEmail = "info@sandamovers.ca";
      
      const mailOptions = {
        from: `"S&A Movers Website" <${fromEmail}>`,
        to: toEmail,
        subject: `New Booking Request from ${bookingData.firstName} ${bookingData.lastName}`,
        text: `
          New Booking Details:
          -------------------
          Client: ${bookingData.firstName} ${bookingData.lastName}
          Email: ${bookingData.email}
          Phone: ${bookingData.phone}
          
          Move Details:
          -------------------
          Date: ${bookingData.moveDate}
          Time: ${bookingData.moveTime}
          Type: ${bookingData.moveType}
          Home Size: ${bookingData.homeSize}
          Property Area: ${bookingData.propertyArea}
          
          Addresses:
          -------------------
          From: ${bookingData.fromAddress}
          To: ${bookingData.toAddress}
          
          Special Instructions:
          -------------------
          ${bookingData.specialInstructions || "None"}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #03144f; border-bottom: 2px solid #f17a21; padding-bottom: 10px;">New Booking Request</h2>
            <p><strong>Client:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            
            <h3 style="color: #03144f; margin-top: 25px;">Move Details</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
              <p><strong>Date:</strong> ${bookingData.moveDate}</p>
              <p><strong>Time:</strong> ${bookingData.moveTime}</p>
              <p><strong>Type:</strong> ${bookingData.moveType}</p>
              <p><strong>Home Size:</strong> ${bookingData.homeSize}</p>
              <p><strong>Property Area:</strong> ${bookingData.propertyArea}</p>
            </div>
            
            <h3 style="color: #03144f; margin-top: 25px;">Addresses</h3>
            <p><strong>From:</strong> ${bookingData.fromAddress}</p>
            <p><strong>To:</strong> ${bookingData.toAddress}</p>
            
            <h3 style="color: #03144f; margin-top: 25px;">Special Instructions</h3>
            <p style="white-space: pre-wrap; background: #fff5eb; padding: 10px; border-left: 4px solid #f17a21;">${bookingData.specialInstructions || "None"}</p>
          </div>
        `
      };

      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        console.log(`Connecting to SMTP: ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`);
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "465"),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          // Add timeout for better robustness
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 20000,
        });

        console.log("Attempting to send booking email...");
        await transporter.sendMail(mailOptions);
        console.log("Booking email sent successfully");
      } else {
        console.warn("SMTP credentials missing. Skipping email send. Logging details instead.");
      }

      res.status(200).json({ 
        success: true, 
        message: "Booking request received! Our team will contact you shortly to confirm details." 
      });
    } catch (error) {
      console.error("Booking error details:", error);
      res.status(500).json({ 
        success: false, 
        message: "We encountered an error processing your booking. Please try again or call us at +1 (647) 514-5024." 
      });
    }
  });

  // API Route for Quotes
  app.post("/api/quote", async (req, res) => {
    console.log("POST /api/quote called");
    try {
      const quoteData = req.body;
      
      console.log("New Quote Request Received:", JSON.stringify(quoteData, null, 2));

      const fromEmail = process.env.SMTP_USER || "info@sandamovers.ca";
      const toEmail = "info@sandamovers.ca";

      const mailOptions = {
        from: `"S&A Movers Website" <${fromEmail}>`,
        to: toEmail,
        subject: `New Detailed Quote Request from ${quoteData.name}`,
        text: `
          New Quote Request Details:
          -------------------------
          Client: ${quoteData.name}
          Email: ${quoteData.email}
          Phone: ${quoteData.phone}
          
          Move Details:
          -------------------------
          Date: ${quoteData.moveDate}
          Type: ${quoteData.moveType}
          Home Size: ${quoteData.homeSize}
          Packing Needed: ${quoteData.needsPacking ? 'Yes' : 'No'}
          
          Addresses:
          -------------------------
          From: ${quoteData.fromAddress}
          To: ${quoteData.toAddress}
          
          Additional Details:
          -------------------------
          ${quoteData.details || "None provided"}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #03144f; border-bottom: 2px solid #ff9d4d; padding-bottom: 10px;">New Detailed Quote Request</h2>
            <p><strong>Client:</strong> ${quoteData.name}</p>
            <p><strong>Email:</strong> ${quoteData.email}</p>
            <p><strong>Phone:</strong> ${quoteData.phone}</p>
            
            <h3 style="color: #03144f; margin-top: 25px;">Move Details</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
              <p><strong>Preferred Date:</strong> ${quoteData.moveDate}</p>
              <p><strong>Service Type:</strong> ${quoteData.moveType}</p>
              <p><strong>Home Size:</strong> ${quoteData.homeSize}</p>
              <p><strong>Full Packing:</strong> ${quoteData.needsPacking ? 'Yes' : 'No'}</p>
            </div>
            
            <h3 style="color: #03144f; margin-top: 25px;">Addresses</h3>
            <p><strong>From:</strong> ${quoteData.fromAddress}</p>
            <p><strong>To:</strong> ${quoteData.toAddress}</p>
            
            <h3 style="color: #03144f; margin-top: 25px;">Additional Inventory/Details</h3>
            <p style="white-space: pre-wrap; background: #fffaf0; padding: 10px; border-left: 4px solid #ff9d4d;">${quoteData.details || "None provided"}</p>
          </div>
        `
      };

      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "465"),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 20000,
        });
        await transporter.sendMail(mailOptions);
        console.log("Quote email sent successfully");
      } else {
        console.warn("SMTP credentials missing for quote request.");
      }

      res.status(200).json({ success: true, message: "Thank you! Your quote request has been received. We will contact you shortly." });
    } catch (error) {
      console.error("Quote error details:", error);
      res.status(500).json({ success: false, message: "We encountered an error processing your quote request. Please try again or call us." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
