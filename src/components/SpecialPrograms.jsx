import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SpecialPrograms = ({ programs }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Special Programs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">{programs.miniSchool.name}</h3>
            <p className="mb-2">{programs.miniSchool.description}</p>
            <p className="mb-4">{programs.miniSchool.size}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Grade 8 Courses</h4>
                <ul className="list-disc pl-6">
                  {programs.miniSchool.courses.grade8.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Grade 9 Courses</h4>
                <ul className="list-disc pl-6">
                  {programs.miniSchool.courses.grade9.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Career Programs</h3>
            {programs.careerPrograms.youthTrain.programs.map((program, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 mt-4">
                <h4 className="font-medium">{program.name}</h4>
                <p className="text-sm text-muted-foreground">Institution: {program.institution}</p>
                <p className="text-sm">Credits: {program.credits}</p>
                <p className="text-sm">Schedule: {program.schedule}</p>
                <p className="text-sm">Application Due: {program.applicationDue}</p>
                <p className="text-sm">Start Dates: {program.startDates.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialPrograms;