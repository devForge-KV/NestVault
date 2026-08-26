import { Agent } from "../models/Agent.js";

export const getAgents = async (req, res) => {
  try {
    const { search, spec, loc } = req.query;
    let query = {};

    if (search) query.name = { $regex: search, $options: "i" };
    if (spec && spec !== "All") query.role = { $regex: spec, $options: "i" };
    if (loc && loc !== "All") query.location = { $regex: loc, $options: "i" };

    const agents = await Agent.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: agents.length, data: agents });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAgentById = async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent)
      return res
        .status(404)
        .json({ success: false, message: "Agent not found" });
    res.status(200).json({ success: true, data: agent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
