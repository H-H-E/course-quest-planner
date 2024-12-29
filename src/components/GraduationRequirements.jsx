import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const GraduationRequirements = ({ requirements }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Graduation Requirements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Required Courses ({requirements.totalCredits} total credits needed)</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Credits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requirements.requiredCourses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.credits}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Additional Requirements</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Requirement</TableHead>
                  <TableHead>Credits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(requirements.additionalRequirements).map(([key, requirement]) => (
                  <TableRow key={key}>
                    <TableCell>{requirement.description}</TableCell>
                    <TableCell>{requirement.credits}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Required Assessments</h3>
            <ul className="list-disc pl-6">
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