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