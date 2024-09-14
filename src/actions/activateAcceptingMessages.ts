'use server'
import db from "@/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function activateAccecptingMessages(value: boolean){
  try {
    const session = await getServerSession(authOptions);
    if(!session || !session.user.id){
      return {
        success: false,
        messages: "Please login to continue"
      }
    }
    const userId = session.user.id;
    await db.user.update({
      where:  { id: userId },
      data: { isAcceptingMessage: value }
    })
    return {
      success: true,
      message: "Accepting messages updated successfully"
    }
  } catch (error) {
    return {
      success: false,
      message: "Please try again later."
    }
  }
}
