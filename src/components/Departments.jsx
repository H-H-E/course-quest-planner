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
          {Object.entries(departments).map(([key, department]) => (
            <Collapsible key={key}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-muted p-4 font-medium hover:bg-muted/80">
                {department.name}
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                {department.courses && (
                  <div className="space-y-4">
                    {department.courses.map((course, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">{course.name} ({course.code})</h4>
                        <p className="text-sm text-muted-foreground">Grade {course.grade}</p>
                        <p className="text-sm">Prerequisite: {course.prerequisite}</p>
                        <p>{course.description}</p>
                        {course.options && (
                          <div className="mt-2">
                            <h5 className="font-medium">Course Options:</h5>
                            <ul className="list-disc pl-6">
                              {course.options.map((option, idx) => (
                                <li key={idx}>
                                  <span className="font-medium">{option.name}</span>
                                  <p className="text-sm">{option.description}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {department.pathways && (
                  <div className="space-y-4">
                    {department.pathways.map((pathway, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold">{pathway.name}</h4>
                        <p className="text-sm text-muted-foreground">{pathway.description}</p>
                        <ul className="list-disc pl-6 mt-2">
                          {pathway.courses.map((course, idx) => (
                            <li key={idx}>{course}</li>
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