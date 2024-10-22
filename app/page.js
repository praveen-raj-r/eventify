import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
// import TestimonialsCarousel from "@/components/testimonials";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

const Home = () => {
  return (
    <main className="container px-4 py-16 mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between gap-12 mb-24 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="pb-6 font-extrabold text-7xl gradient-title">
            Simplify Your Scheduling
          </h1>
          <p className="mb-10 text-xl text-gray-600">
            Schedulrr helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.png"
              alt="Scheduling illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <CardTitle className="text-center text-blue-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-24">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-600">
          What Our Users Say
        </h2>
        {/* <TestimonialsCarousel /> */}
      </div>

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <span className="text-xl font-bold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-8 text-center text-white bg-blue-600 rounded-lg">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Simplify Your Scheduling?
        </h2>
        <p className="mb-6 text-xl">
          Join thousands of professionals who trust Schedulrr for efficient time
          management.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start For Free <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
