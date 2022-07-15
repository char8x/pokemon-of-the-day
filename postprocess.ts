// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readCSV, writeJSON } from "https://deno.land/x/flat@0.0.15/mod.ts";

// Get the downloaded_filename as the first argument
const inputfile = Deno.args[0];
const originalCSV = await readCSV(inputfile);

await writeJSON("all-pokemon.json", originalCSV);
