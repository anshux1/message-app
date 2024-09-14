"use client"
import { getMessages } from "@/actions/getMessages";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { useEffect, useState } from "react";

type Message = {
  message: string;
}

export  function Messages() {
  const router = useRouter()
  const session = useSession();
  const [isMessagesExist, setIsMessagesExist] = useState('')
  const userData = session.data?.user
  const [messaages, setMessages] = useState<Message[]>([])

  if(!userData?.username){
    router.replace("/signin");
  }

  useEffect(() => {
    try {
      const fetchMessages = async() => {
        const response = await getMessages(userData?.username || ""); 
        if(!response.success){
          setIsMessagesExist(response.message || "")
        }
        if(response?.success){
          setMessages(response?.data || [])
        }
      }
      const interval = setInterval(() => {
        fetchMessages();
      }, 10000)

      return () => clearInterval(interval)  
    } catch (error) {
      console.log("Error while fetching messages")
    }
  },[userData?.username])

  console.log(isMessagesExist)
  if(messaages.length < 1){
    return (
      <div className="p-6 flex flex-wrap gap-3">
        No messages available
      </div>
    )
  }
  
  return (
    <div className="p-4 flex flex-wrap gap-3">
      {messaages && messaages.map((item, index) => {
        return MessageCard({ message: item.message, number: index });
      })}
    </div>
  )
}


interface CardProps {
  message: string;
  number: number;
}


function MessageCard({ message, number }: CardProps) {
  return (
    <Card className="w-[321px]">
      <CardHeader>
        <CardTitle className="text-sm">Message {number + 1}</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
    </Card>
  )
}
