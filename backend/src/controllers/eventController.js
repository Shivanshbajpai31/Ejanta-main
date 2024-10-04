import Event from "../models/eventModel.js";

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const image = req.files.image.path || "";
    // Create a new event
    const event = new Event({
      title,
      description,
      location,
      date,
      image: `${req.files.image.path}`,
    });

    // Save the event to the database
    const savedEvent = await event.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    // Find all events
    const events = await Event.find({});

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Get events by date
const getEventsByDate = async (req, res) => {
  try {
    const { date } = req.params;
    // Find all events
    const events = await Event.find({ date });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { createEvent, getEventsByDate, getEvents };
