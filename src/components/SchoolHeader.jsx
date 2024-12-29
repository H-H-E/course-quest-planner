import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SchoolHeader = ({ schoolInfo }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{schoolInfo.name}</CardTitle>
        <CardDescription>
          <div className="space-y-1">
            <p>{schoolInfo.address}</p>
            <p>Phone: {schoolInfo.phone}</p>
            <p>Website: {schoolInfo.website}</p>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default SchoolHeader;