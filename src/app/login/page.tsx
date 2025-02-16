import { AuthForm } from "@/components/features/auth/auth-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import LoginSideImage from "~/svg/WelcomeImage.svg";
import BrandLogo from "~/svg/logos/BrandLogo.svg";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Side - Image Section */}
      <div className="hidden md:flex bg-primary justify-center items-center">
        <Image src={LoginSideImage} alt="Welcome!" width={500} height={500} />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col gap-6 justify-center items-center p-4">
        <Image src={BrandLogo} alt="Slotit Logo" />

        <Tabs defaultValue="signIn" className="w-full max-w-[400px] space-y-2">
          <TabsList className="w-full flex justify-center">
            <TabsTrigger value="signIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signIn">
            <AuthForm type="signIn" />
          </TabsContent>
          <TabsContent value="signUp">
            <AuthForm type="signUp" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
