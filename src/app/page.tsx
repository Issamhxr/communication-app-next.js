import { Button } from "@/components/ui/button";
import SwitchMode from "@/components/ui/SwitchMode";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <div>
   
            <SignedOut>
            <SignInButton  mode="modal"> 
            <Button> Sign in </Button>
             </SignInButton>
         
           </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          
          
          <SwitchMode/>

  </div>



   
  
  );
}
