import { Alert } from "../models/alertModel.js";



// Create a new alert
export const createAlert = async (req, res) => {
    try {
        const { title, category, description, location } = req.body;

        // Create a new alert
        const alert = new Alert({
            title,
            category,
            description,
            location
        });

        // Save the alert to the database
        await alert.save();

        res.status(201).json({ message: 'Alert created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all alerts
export const getAlerts = async (req, res) => {
    try {
        // Find all alerts
        const alerts = await Alert.find({});

        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Get all reports
export const getReports = async (req, res) => {
    try {
        // Find all reports
        const reports = await Report.find({}).populate('user', 'username');

        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};