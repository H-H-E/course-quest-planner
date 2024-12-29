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
          {/* Mini School Section */}
          {programs.miniSchool && (
            <div>
              <h3 className="text-lg font-semibold mb-2">{programs.miniSchool.name}</h3>
              <p className="text-sm mb-2">{programs.miniSchool.description}</p>
              <p className="text-sm mb-4">Size: {programs.miniSchool.size}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(programs.miniSchool.courses).map(([grade, courses]) => (
                  <div key={grade} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Grade {grade.replace('grade', '')}</h4>
                    <ul className="list-disc pl-5">
                      {courses.map((course, index) => (
                        <li key={index} className="text-sm">{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Career Programs Section */}
          {programs.careerPrograms?.youthTrain && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Career Programs</h3>
              <div className="mb-4">
                <p className="text-sm mb-2">{programs.careerPrograms.youthTrain.description}</p>
                {programs.careerPrograms.youthTrain.programs.map((prog, index) => (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-2">{prog.name}</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Institution: {prog.institution}</li>
                      <li>Credits: {prog.credits}</li>
                      <li>Schedule: {prog.schedule}</li>
                      <li>Application Due: {prog.applicationDue}</li>
                      <li>Start Dates: {prog.startDates.join(', ')}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialPrograms;