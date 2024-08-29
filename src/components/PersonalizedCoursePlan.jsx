import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const PersonalizedCoursePlan = ({ user }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Personalized Course Plan for {user.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">User Overview</h2>
          <p><strong>Preferences:</strong> {user.preferences}</p>
          <p><strong>Goals:</strong> {user.goals}</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Recommended Courses</h2>
          {user.recommendedCourses.map((course, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p><strong>Reason:</strong> {course.reason}</p>
            </div>
          ))}
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Additional Ways to Reach Your Goals</h2>
          <ul className="list-disc pl-5">
            <li>Participate in coding bootcamps or online courses</li>
            <li>Join computer science or robotics clubs</li>
            <li>Seek internships or part-time jobs in tech companies</li>
            <li>Attend tech conferences or workshops</li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button onClick={handlePrint} className="print:hidden">
          <Printer className="mr-2 h-4 w-4" /> Print Course Plan
        </Button>
      </div>
      
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .max-w-4xl, .max-w-4xl * {
            visibility: visible;
          }
          .max-w-4xl {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PersonalizedCoursePlan;