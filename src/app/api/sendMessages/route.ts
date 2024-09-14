import db from "@/db";
import { messageImputSchema } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  try {
    const { username , message } = await req.json();
    const { success } = messageImputSchema.safeParse({ username, message });
    if(!success){
      return NextResponse.json({
        success: false,
        message: "Incorrect inputs"
      })
    }
    const isUserExist = await db.user.findUnique({
      where: { username }
    })
    if(!isUserExist){
      return NextResponse.json({
        success: false,
        message: "No user found with this username"
      })
    }

    if(isUserExist && !isUserExist.isAcceptingMessage){
      return NextResponse.json({
        success: false,
        message: "User is not acceping messaages."
      })
    }

    const newMessage = await db.message.create({
      data: {
        userId: username,
        message
      }
    })
    await db.user.update({
      where: {
        username
      },
      data: {
        messages: { 
          connect: { 
            id: newMessage.id 
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully."
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Try again after some time"
    })
  }
}
