import mongoose from "mongoose";
import { config } from "../config/config";

const dbURL = `${config.db.uri}-${config.app?.environment}`;
if (!dbURL) console.error("Mongo URL not set in env file or config.js");

mongoose.connect(dbURL);

export { mongoose };
