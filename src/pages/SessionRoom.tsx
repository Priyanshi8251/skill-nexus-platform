import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MonitorUp, 
  Phone, 
  Pencil, 
  Eraser, 
  Type, 
  Square,
  Circle,
  Triangle,
  Undo2,
  Redo2
} from "lucide-react";
import { useState } from "react";

const SessionRoom = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4">
          {/* Left Side - Whiteboard (70%) */}
          <div className="flex-1 lg:w-[70%]">
            <Card className="h-full border-2 relative overflow-hidden">
              {/* Whiteboard Toolbar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-card/90 backdrop-blur-sm p-2 rounded-lg border shadow-lg">
                <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-white">
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-destructive hover:text-white">
                  <Eraser className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Type className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button size="icon" variant="ghost">
                  <Circle className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Square className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Triangle className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button size="icon" variant="ghost">
                  <Undo2 className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Redo2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Whiteboard Canvas */}
              <div className="w-full h-full bg-white flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Square className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p className="text-lg font-medium">Collaborative Whiteboard</p>
                  <p className="text-sm">Start drawing to collaborate in real-time</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Video Conferencing (30%) */}
          <div className="lg:w-[30%] flex flex-col gap-4">
            {/* Mentor Video */}
            <Card className="flex-1 border-2 relative overflow-hidden bg-black">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl font-bold">M</span>
                  </div>
                  <p className="font-medium">Mentor Video</p>
                  <p className="text-sm text-gray-400">Camera is off</p>
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                Mentor
              </div>
            </Card>

            {/* Student Video */}
            <Card className="flex-1 border-2 relative overflow-hidden bg-black">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl font-bold">S</span>
                  </div>
                  <p className="font-medium">Student Video</p>
                  <p className="text-sm text-gray-400">You</p>
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                You
              </div>
            </Card>
          </div>
        </div>

        {/* Control Bar */}
        <div className="border-t bg-card/50 backdrop-blur-sm p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant={isMuted ? "destructive" : "secondary"}
                onClick={() => setIsMuted(!isMuted)}
                className="rounded-full w-14 h-14"
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </Button>
              
              <Button
                size="lg"
                variant={isCameraOff ? "destructive" : "secondary"}
                onClick={() => setIsCameraOff(!isCameraOff)}
                className="rounded-full w-14 h-14"
              >
                {isCameraOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
              </Button>
              
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full w-14 h-14"
              >
                <MonitorUp className="w-5 h-5" />
              </Button>
              
              <Button
                size="lg"
                variant="destructive"
                className="rounded-full px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                End Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionRoom;
