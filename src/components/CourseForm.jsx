import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CourseForm = ({ formData, handleInputChange, handleSelectChange, handleMultiSelectChange, isLoading, onSubmit }) => {
  return (
    <form className="grid gap-6" onSubmit={onSubmit}>
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input 
          id="fullName" 
          placeholder="Enter your full name" 
          value={formData.fullName} 
          onChange={handleInputChange} 
        />
      </div>

      <div>
        <Label htmlFor="grade">Current Grade</Label>
        <Select id="grade" onValueChange={(value) => handleSelectChange('grade', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="9">Grade 9</SelectItem>
            <SelectItem value="10">Grade 10</SelectItem>
            <SelectItem value="11">Grade 11</SelectItem>
            <SelectItem value="12">Grade 12</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="subjects">Subjects of Interest</Label>
        <Select id="subjects" onValueChange={(value) => handleMultiSelectChange('subjects', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select subjects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="math">Mathematics</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="history">History</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="academicGoals">Academic Goals</Label>
        <Textarea
          id="academicGoals"
          placeholder="Describe your academic goals"
          value={formData.academicGoals}
          onChange={handleInputChange}
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Generating Recommendations...' : 'Get Course Recommendations'}
      </Button>
    </form>
  );
};

export default CourseForm;