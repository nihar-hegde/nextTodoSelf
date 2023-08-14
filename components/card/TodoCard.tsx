"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { formValidation } from "@/lib/validations/formValidation";
import { deleteTitle } from "@/lib/actions/titleAction";
import { z } from "zod";

interface Props {
  title: string;
  titleId: string;
}

const TodoCard = ({ title, titleId }: Props) => {
  const handleOnClick = async () => {
    const deleted = await deleteTitle(titleId);
    if (deleted) {
      // You might want to update your UI or handle any other actions here
      console.log("Title deleted successfully.");
    } else {
      // Handle the case when the title was not found or couldn't be deleted
      console.log("Title not found or could not be deleted.");
    }
  };
  return (
    <>
      <div className="max-w-sm max-h-md p-5 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{title}</p>
          </CardContent>
          <CardFooter>
            <Button variant={"destructive"} onClick={handleOnClick}>
              Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default TodoCard;
