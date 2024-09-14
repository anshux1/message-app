import { Messages } from '@/components/Messages'
import SendMessages from '@/components/SendMessage'

export default function HomePage(){ 
  return (
    <div className="bg-background relative flex size-full w-screen h-screen pt-16 items-center justify-center overflow-hidden rounded-lg border" >
      <div className="size-full flex flex-col items-start max-w-5xl overflow-hidden">
        <SendMessages />
        <Messages />
      </div>
    </div>
  )
}
