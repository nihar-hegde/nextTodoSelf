"use server";
import { connectToDb } from "../validations/mongoose";
import Title from '../models/title.model';

export async function createTitle(
    title:string
){
    try {
        connectToDb();
        const newTitle = new Title({
            title
        });
        const createdTitle = await newTitle.save();
        return createTitle;
    } catch (error) {
        console.log("Error createing new title",error);
        throw error;
        
    }
}

export async function fetchTitle(){
    try {
        connectToDb();
        const titleDetails = await Title.find();
        return titleDetails;
    } catch (error) {
        console.log("Error while fetching title details",error);
        throw error;
        
    }
}
//!Delete thread test
export async function deleteTitle(titleId:string) {
    try {
        connectToDb(); // Assuming this function connects to the database

        // Assuming Title.deleteOne() is a method that deletes a title by its ID
        const deleteResult = await Title.findByIdAndDelete({ _id: titleId });

        if (deleteResult.deletedCount === 1) {
            console.log(`Title with ID ${titleId} deleted successfully.`);
            return true; // Return true to indicate successful deletion
        } else {
            console.log(`Title with ID ${titleId} not found.`);
            return false; // Return false if title was not found
        }
    } catch (error) {
        console.log("Error while deleting title", error);
        throw error;
    }
}