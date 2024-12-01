import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Zap, Lock, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Smartphone className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">AiCompanion</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/20 to-background">
          <div className="mx-auto px-4 md:px-6">
            <div className="max-w-[700px] mx-auto flex flex-col text-center items-center justify-center space-y-4">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Mobile AI Companion For School
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Our application provides you with a personal AI companion that
                  will assist you with homework, research, studying, and all
                  your academic tasks 24/7. Get instant help with any subject,
                  from math to literature.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="default">
                  <a
                    href="https://github.com/SP100-CampusAICompanion-Project"
                    target="_blank"
                  >
                    See Github
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              See It In Action
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                >
                  <source src="/assets/ai-submission.mp4" type="video/mp4" />
                  <source
                    src="/assets/ai-submission.webm"
                    type="video/webm"
                  />{" "}
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Watch how our AI companion helps students excel in their studies
              </p>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Zap className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold text-center">
                    Lightning Fast
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Experience blazing fast performance with our optimized
                    mobile app.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Lock className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold text-center">
                    Secure & Private
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Your data is protected with state-of-the-art encryption and
                    privacy features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Globe className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold text-center">
                    Cross-Platform
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Use our app seamlessly across all your devices, with perfect
                    synchronization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-center">Download</h3>
                <p className="text-center text-muted-foreground">
                  Get our app from your device`&apos;`s app store.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-center">Set Up</h3>
                <p className="text-center text-muted-foreground">
                  Create your account and customize your preferences.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-center">Enjoy</h3>
                <p className="text-center text-muted-foreground">
                  Start using the app and experience the difference.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 AppName Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
