import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const Departments = ({ departments }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Academic Departments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(departments).map(([key, dept]) => (
            <Collapsible key={key}>
              <CollapsibleTrigger className="flex w-full justify-between items-center py-2 font-semibold hover:bg-muted px-4 rounded-lg">
                {dept.name}
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                {dept.courses && (
                  <div className="space-y-4">
                    {dept.courses.map((course, index) => (
                      <div key={index} className="border-l-2 pl-4">
                        <h4 className="font-semibold">{course.name} ({course.code})</h4>
                        <p className="text-sm text-muted-foreground">Grade: {course.grade}</p>
                        <p className="text-sm text-muted-foreground">Prerequisite: {course.prerequisite}</p>
                        <p className="text-sm">{course.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                {dept.pathways && (
                  <div className="space-y-4">
                    {dept.pathways.map((pathway, index) => (
                      <div key={index} className="border-l-2 pl-4">
                        <h4 className="font-semibold">{pathway.name}</h4>
                        <p className="text-sm">{pathway.description}</p>
                        <ul className="list-disc pl-5 mt-2">
                          {pathway.courses.map((course, courseIndex) => (
                            <li key={courseIndex} className="text-sm">{course}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Departments;