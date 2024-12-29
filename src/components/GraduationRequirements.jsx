import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const GraduationRequirements = ({ requirements }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Graduation Requirements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="font-semibold">Total Credits Required: {requirements.totalCredits}</p>
          
          <div>
            <h3 className="font-semibold mb-2">Required Courses:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {requirements.requiredCourses.map((course, index) => (
                <li key={index}>
                  {course.name} ({course.credits} credits)
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Additional Requirements:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {Object.entries(requirements.additionalRequirements).map(([key, req]) => (
                <li key={key}>
                  {req.description} ({req.credits} credits)
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Required Assessments:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {requirements.assessments.map((assessment, index) => (
                <li key={index}>{assessment}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GraduationRequirements;