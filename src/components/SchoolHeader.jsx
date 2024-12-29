import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SchoolHeader = ({ schoolInfo }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{schoolInfo.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{schoolInfo.address}</p>
        <p className="text-sm text-muted-foreground">Phone: {schoolInfo.phone}</p>
        <p className="text-sm text-muted-foreground">Website: {schoolInfo.website}</p>
      </CardContent>
    </Card>
  );
};

export default SchoolHeader;