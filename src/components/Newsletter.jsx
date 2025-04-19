
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-purple-900">Never Miss a Deal</h2>
        <p className="mb-6 text-gray-600">
          Subscribe to our newsletter and be the first to know about our special offers
        </p>
        <div className="flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-sm"
          />
          <Button className="bg-purple-700 hover:bg-purple-800">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;